import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export const getMovieListRequest = () => {
  return (dispatch) => {
    //start Loading
    dispatch(startLoading());
    //call api
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
      .then((res) => {
        dispatch(getMovieListSucess(res.data));
        console.log(res);
        // stop loading
        setTimeout(function () {
          dispatch(stopLoading());
        }, 5000);
      })
      .catch((err) => {
        dispatch(getMovieListFailed(err));
        // stop loading
      });
  };
};

const getMovieListSucess = (movieList) => {
  return {
    type: "GET_MOVIE_LIST_SUCESS",
    payload: movieList,
  };
};
const getMovieListFailed = (error) => {
  return {
    type: "GET_MOVIE_LIST_FAILED",
    payload: error,
  };
};

export const getMovieDetailRequest = (movieCode) => {
  return (dispatch) => {
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`
    )
      .then((res) => {
        dispatch(getMovieDetailSuccess(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        dispatch(getMovieDetailFailed(err));
      });
  };
};
const getMovieDetailSuccess = (movieDetail) => {
  return {
    type: "GET_MOVIE_DETAIL_SUCCESS",
    payload: movieDetail,
  };
};
const getMovieDetailFailed = (error) => {
  return {
    type: "GET_MOVIE_DETAIL_FAILED",
    payload: error,
  };
};
