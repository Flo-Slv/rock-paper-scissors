import { gql } from "@apollo/client";

const GET_RESULTS = gql`
  query GetResults {
    getResults {
      id
      nickName
      userScore
      computerScore
      date
    }
  }
`;

export default GET_RESULTS;
