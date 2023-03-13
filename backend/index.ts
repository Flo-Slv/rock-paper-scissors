import express, { Express } from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import mongoose from "mongoose";
import dotenv from "dotenv";

import resolvers from "./graphql/resolvers/index";
import typeDefs from "./graphql/typeDefs";

// Load .env
dotenv.config();

// DB setup + connection.
const mongo = () => {
  mongoose.set("strictQuery", Boolean(false)); // To avoid warning in terminal.
  mongoose.connect(process.env.MONGODB).then(() => {
    console.log("MongoDB connected !");
  });
};

// Express setup w/ ApolloServer.
const listen = async (port: number) => {
  // Express server.
  const app: Express = express();
  const httpServer = http.createServer(app);

  // ApolloServer config.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  return new Promise((resolve, reject) => {
    httpServer.listen(port).once("listening", resolve).once("error", reject);
  });
};

const main = async () => {
  try {
    mongo();
    await listen(4000);
    console.log("🚀 Server is ready at http://localhost:4000/graphql");
  } catch (err) {
    console.error("💀 Error starting the node server", err);
  }
};

void main();
