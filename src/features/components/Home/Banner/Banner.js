import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { removeVietnameseTones } from "../../../container/Functionjs";
import person1 from "../../../images/person1.jpg";
import person2 from "../../../images/person2.jpg";
import person3 from "../../../images/person3.jpg";
export default function Banner() {
  const [state, setState] = useState({ name: "", address: "" });
  const { name, address } = state;
  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="banner container-fluid">
      <div className="row p-5">
        <div className="banner__search col-lg-5 col-12 d-flex align-items-center justify-content-center">
          <div className="banner__search--box">
            <div className="banner__search--box--title">
              <h4 className="text-center">Công việc của bạn</h4>
              <p>
                Chào mừng đến với trang web việc làm của chúng tôi, tại đây bạn
                có thể tạo CV cho bản thân, tìm kiếm việc làm phù hơp, tham khảo
                các công ty, doanh nghiệp, hay cập nhật những tin tức mới nhất
                về thị trường việc làm. Đây cũng làm nơi các nhà tuyển dụng có
                thể tìm thấy các ứng viên thích hợp cho doanh nghiệp của mình
              </p>
            </div>
            <div className="banner__search--box--content">
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onchange}
                id=""
                aria-describedby="helpId"
                placeholder="Việc làm.."
              />
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={onchange}
                id=""
                aria-describedby="helpId"
                placeholder="Địa điểm..."
              />
              <Link
                to={`jobs?name=${removeVietnameseTones(
                  name
                )}&address=${removeVietnameseTones(address)}`}
                className="btn btn-primary"
              >
                <button type="button">Search</button>
              </Link>
            </div>
            <div className="banner__search--suggestions"></div>
          </div>
        </div>
        <div className="col-lg-7  col-12 d-flex flex-row-reverse justify-content-center mt-lg-0 mt-5">
          <div className="cardPerson text1">
            <img src={person3}></img>
            <div className="textBx">
              <div className="jobName">
                <p className="m-0">Phân tích tài chính</p>
              </div>
            </div>
          </div>
          <div className="cardPerson text2">
            <img src={person2}></img>
            <div className="textBx">
              <div className="jobName">
                <p className="m-0">Môi giới chứng khoán</p>
              </div>
            </div>
          </div>
          <div className="cardPerson text3">
            <img src={person1}></img>
            <div className="textBx">
              <div className="jobName">
                <p className="m-0">Quản lý nhân sự</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
