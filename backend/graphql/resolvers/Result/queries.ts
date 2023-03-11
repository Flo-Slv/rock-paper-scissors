import Result from "../../../models/Result";

const resultQueries = {
  Query: {
    getResults: async () => {
      try {
        const results = await Result.find();

        return results;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default resultQueries;
