import React from "react";
import { useSelector } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

import format from "date-format";

import useStyles from "./styles";

function ShowTimes() {
  const lichChieu = useSelector((state) => {
    return state.movie.movieInfo?.lichChieu;
  });
  console.log(lichChieu);
  const classes = useStyles();
  function renderListShowTimes() {
    return lichChieu?.map((showTime, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{showTime.thongTinRap.tenHeThongRap}</TableCell>
          <TableCell>{showTime.thongTinRap.tenCumRap}</TableCell>
          <TableCell>
            {format("dd-MM-yy", new Date(showTime.ngayChieuGioChieu))}
          </TableCell>
          <TableCell>
            {format("hh-mm", new Date(showTime.ngayChieuGioChieu))}
          </TableCell>
          <TableCell>
            <Button
              className={classes.btnBooking}
              color="primary"
              variant="contained"
            >
              Dat Ve
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  }
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ten He Thong Rap</TableCell>
              <TableCell>Ten Cum Rap</TableCell>
              <TableCell>Ngay Chieu</TableCell>
              <TableCell>Gio Chieu</TableCell>
              <TableCell>Dat Ve</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderListShowTimes()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ShowTimes;
