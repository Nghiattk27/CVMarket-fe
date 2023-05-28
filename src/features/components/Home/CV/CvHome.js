import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/Home/CvHome.scss";
import cv from "../../../images/cv.jpg";
export default function CvHome() {
  return (
    <div className="CvHome">
      <div className="bg-white d-flex flex-column justify-content-center align-items-center p-3 rounded bigBox">
        <div className="CvHome__title">
          <h3>Tạo CV để bắt đầu ứng tuyển</h3>
        </div>
        <div className="CvHome__detail">
          <p>
            Có rất nhiều cơ hội làm việc cho bạn, hãy bắt đầu bằng việc tạo một
            cv thật đẹp.
          </p>
        </div>
        <button className="btnCV rounded mt-3">
          <img src={cv}></img>
          <Link className="createCv" to="/createcv">
            Tạo CV
          </Link>
        </button>
        {/* <button className="ms-5 btnCV">
          <Link to="/jobs" className="searchCv">
            Tìm việc ngay
          </Link>
        </button> */}
      </div>
    </div>
  );
}
