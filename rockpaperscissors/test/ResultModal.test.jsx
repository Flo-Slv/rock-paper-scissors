/**
 * @jest-environment jsdom
 */

import React from "react";
import fetch from "cross-fetch";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { render, fireEvent } from "@testing-library/react";
// import { screen } from "@testing-library/dom";

import ResultModal from "../client/components/ResultModal";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql", fetch }),
  cache: new InMemoryCache(),
});

test("close modal on pressing Escape", () => {
  const mockClose = jest.fn();

  render(
    <ApolloProvider client={client}>
      <ResultModal openModal={Boolean(true)} handleCloseModal={mockClose} />
    </ApolloProvider>
  );

  fireEvent.keyDown(document, { key: "Escape" });

  expect(mockClose.mock.calls.length).toBe(1);
});
