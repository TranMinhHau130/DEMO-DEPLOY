import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailRequest } from "../../redux/actions/movie.actions";

import ShowTimes from "../../components/ShowTimes";

export default function MovieDetail() {
  const [star, setStar] = useState(0);
  const dispatch = useDispatch();
  let { movieCode } = useParams();
  movieCode = movieCode.slice(1, movieCode.length);
  // console.log(movieCode);
  useEffect(function () {
    // chay khi component duoc khoi tao
    // console.log("useEffect");
    return function () {
      //don dep cac tac vu
    };
  });
  useEffect(function () {
    dispatch(getMovieDetailRequest(movieCode));
    // console.log("useEffect chay 1 lan");
    return function () {};
  }, []); // chay 1 lan khi component duoc khoi tao
  useEffect(
    function () {
      // console.log("useEffect chay khi star thay doi");
      return function () {};
    },
    [star]
  ); // nếu 1 trong số các biến trong mảng này thay đổi, mới chạy lại useEffect,  ngược lại sẽ ko chạy
  return (
    <div>
      <p>{star}</p>
      <button onClick={() => setStar(star + 1)}>Tang Sao</button>
      <ShowTimes />
    </div>
  );
}
