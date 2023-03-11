const typeDefs = `#graphql
  type Result {
    id: ID!
		nickName: String!
    score: Int!
		date: String!
  }

  type Query {
    getResults: [Result!]
  }

	type Mutation {
		createResult(nickName: String!, score: Int!, date: String!): Result!
	}
`;
export default typeDefs;
