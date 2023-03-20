import { model, Schema } from "mongoose";

const resultSchema = new Schema({
  nickName: String,
  userScore: Number,
  computerScore: Number,
  date: String,
});

export default model("Result", resultSchema);
