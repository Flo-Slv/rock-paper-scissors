import { gql } from "@apollo/client";

const CREATE_RESULT = gql`
  mutation CreateResult(
    $nickName: String!
    $userScore: Int!
    $computerScore: Int!
  ) {
    createResult(
      nickName: $nickName
      userScore: $userScore
      computerScore: $computerScore
    ) {
      id
      nickName
      userScore
      computerScore
      date
    }
  }
`;

export default CREATE_RESULT;
