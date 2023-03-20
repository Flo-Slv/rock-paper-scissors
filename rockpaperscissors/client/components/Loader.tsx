import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <LinearProgress className="w-32 md:w-52" color="secondary" />
    </div>
  );
};

export default Loader;
