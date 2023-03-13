import React from "react";

import Results from "./components/Results";

import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">TypeScript is awesome</h1>

      <Results />
    </div>
  );
};

export default App;
