// import Result from "../../../models/Result";
const resultMutations = {
    Mutation: {
        createResult: async (_, { nickName, score, date }) => {
            try {
                return {};
            }
            catch (err) {
                throw new Error(err);
            }
        },
    },
};
export default resultMutations;
