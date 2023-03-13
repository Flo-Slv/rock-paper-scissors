import { gql } from "@apollo/client";

const CREATE_RESULT = gql`
  mutation CreateResult($nickName: String!, $score: Int!) {
    createResult(nickName: $nickName, score: $score) {
      id
      nickName
      score
      date
    }
  }
`;

export default CREATE_RESULT;
