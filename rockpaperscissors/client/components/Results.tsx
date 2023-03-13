import React from "react";
import { useQuery } from "@apollo/client";

import GET_RESULTS from "../../server/graphql/queries/getResults";

const Results = () => {
  const { loading, error, data } = useQuery(GET_RESULTS);

  if (error) return <div>Error...</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Results</h2>

      {data &&
        data?.getResults.map(({ id, nickName, score, date }) => (
          <div key={id}>
            <div>Nickname: {nickName}</div>
            <div>Score: {score}</div>
            <div>Date: {date}</div>
          </div>
        ))}
    </div>
  );
};

export default Results;
