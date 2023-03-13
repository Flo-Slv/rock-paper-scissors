import { gql } from "@apollo/client";
const GET_RESULTS = gql `
  query GetResults {
    getResults {
      id
      nickName
      score
      date
    }
  }
`;
export default GET_RESULTS;
