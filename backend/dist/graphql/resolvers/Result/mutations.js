import Result from "../../../models/Result";
const resultMutations = {
    Mutation: {
        createResult: async (_, { nickName, score }) => {
            try {
                if (nickName.trim() === "")
                    throw new Error("nickName can not be empty !");
                if (isNaN(score))
                    throw new Error("score is not a number !");
                const date = new Date().toLocaleString("fr-FR", { timeZone: "CET" });
                const newResult = await Result.create({
                    nickName: nickName,
                    score: score,
                    date: date,
                });
                return newResult;
            }
            catch (err) {
                throw new Error(err);
            }
        },
    },
};
export default resultMutations;
