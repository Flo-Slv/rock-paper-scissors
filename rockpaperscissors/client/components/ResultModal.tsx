import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import GET_RESULTS from "../utils/graphql/queries/getResults";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ResultModal = ({ openModal, handleCloseModal }) => {
  const [open, setOpen] = useState(Boolean(false));

  const { loading, error, data } = useQuery(GET_RESULTS, {
    fetchPolicy: "no-cache",
  });

  if (error) return <div>Error...</div>;

  if (loading) return <div>Loading...</div>;

  const handleClose = () => {
    setOpen(Boolean(false));
    handleCloseModal();
  };

  return (
    <Modal
      open={open || openModal}
      onClose={handleClose}
      aria-labelledby="modal-result-title"
      aria-describedby="modal-result-description"
    >
      <Box sx={style}>
        {data && data?.getResults.length > 0 ? (
          data?.getResults.map(({ id, nickName, score, date }) => (
            <div key={id}>
              <div>Nickname: {nickName}</div>
              <div>Score: {score}</div>
              <div>Date: {date}</div>
            </div>
          ))
        ) : (
          <div>No result saved yet !</div>
        )}
      </Box>
    </Modal>
  );
};

export default ResultModal;
