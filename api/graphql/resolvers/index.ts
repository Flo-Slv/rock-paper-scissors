import resultQueries from "./Result/queries";
import resultMutations from "./Result/mutations";

export default {
  Query: {
    ...resultQueries.Query,
  },
  Mutation: {
    ...resultMutations.Mutation,
  },
};
