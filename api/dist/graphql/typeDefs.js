const typeDefs = `#graphql
  type Result {
    id: ID!
		nickName: String!
    userScore: Int!
    computerScore: Int!
		date: String!
  }

  type Query {
    getResults: [Result!]
  }

	type Mutation {
		createResult(nickName: String!, userScore: Int!, computerScore: Int!): Result!
	}
`;
export default typeDefs;
