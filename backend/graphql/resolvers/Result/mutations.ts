// import Result from "../../../models/Result";

const resultMutations = {
  Mutation: {
    createResult: async (_: any, { nickName, score, date }) => {
      try {
        return {};
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default resultMutations;
