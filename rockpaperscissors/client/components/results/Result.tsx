import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Result = ({ data }) => {
  console.log("here !!");

  return (
    <div>
      {data && data?.getResults.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nickname</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">User score</TableCell>
                <TableCell align="right">Computer score</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data?.getResults.map(
                ({ id, nickName, userScore, computerScore, date }) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {nickName}
                    </TableCell>
                    <TableCell align="right">{date}</TableCell>
                    <TableCell align="right">{userScore}</TableCell>
                    <TableCell align="right">{computerScore}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>No result saved yet !</div>
      )}
    </div>
  );
};

export default Result;

// {rows.map((row) => (
//   <TableRow
//     key={row.name}
//     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//   >
//     <TableCell component="th" scope="row">
//       {row.name}
//     </TableCell>
//     <TableCell align="right">{row.calories}</TableCell>
//     <TableCell align="right">{row.fat}</TableCell>
//     <TableCell align="right">{row.carbs}</TableCell>
//     <TableCell align="right">{row.protein}</TableCell>
//   </TableRow>
// ))}
