import Result from "../../../models/Result";

const resultMutations = {
  Mutation: {
    createResult: async (_: any, { nickName, userScore, computerScore }) => {
      try {
        if (nickName.trim() === "")
          throw new Error("nickName can not be empty !");

        if (isNaN(userScore)) throw new Error("User score is not a number !");

        if (isNaN(computerScore))
          throw new Error("Computer score is not a number !");

        // computerScore can be 0, not userScore.
        if (userScore <= 0 || computerScore < 0)
          throw new Error("Scores have to be positive !");

        const date = new Date().toLocaleString("fr-FR", { timeZone: "CET" });

        const newResult = await Result.create({
          nickName: nickName,
          userScore: userScore,
          computerScore: computerScore,
          date: date,
        });

        return newResult;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default resultMutations;
