import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";

export const LoginRequest = (user) => {
  return (dispatch) => {
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
