import React, { forwardRef, SyntheticEvent, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Error = ({ error }) => {
  const [open, setOpen] = useState(Boolean(true));

  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;

    setOpen(Boolean(false));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error?.message}
      </Alert>
    </Snackbar>
  );
};

export default Error;
