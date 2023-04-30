import { message } from "antd";
import React, { useEffect, useState } from "react";
import renderHTML from "react-render-html";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import checkLoginApi from "../../../../api/checkLogin";
import "../../../scss/CreateCV/ListCV.scss";
import SpinLoad from "../../Spin/Spin";
export default function ListCV({ data, loading }) {
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    checkLoginApi.checkLogin().then((ok) => {
      if (ok.data.user.type === "user") {
        setUser(ok.data.user.id);
      }
    });
  });
  const onClickInforCV = () => {
    if (user) {
      history.push("/inforCV");
    } else {
      message.warning("Bạn chưa đăng nhập tài khoản người dùng!");
    }
  };
  return (
    <div className="listCv">
      <div className="heading">
        <div className="heading__title">
          <h3>Tạo Cv</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <div className="div-btn-cv">
        <Link className="btn-infor-cv" onClick={onClickInforCV}>
          Điền thông tin CV
        </Link>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex">
              <input placeholder="Tìm Kiếm" />
              <button>Search</button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row gx-5">
              {loading ? (
                <SpinLoad />
              ) : (
                data.rows.map((ok) => (
                  <div className="col-md-4 d-flex mb-4">
                    <Link to={`/detaiFormCV/${ok.id}`} className="w-100">
                      <div className="box">
                        <div className="box-img">
                          <img src={ok.avatar} alt="avatar" />
                        </div>
                        <div className="box-tag">
                          {ok.Tags.map((oki) => (
                            <p>{oki.name}</p>
                          ))}
                        </div>
                        <div className="box-name">
                          {/* <p>{ok.name}</p>
                           */}
                          {ok.name ? renderHTML(ok.name) : "CV Đẹp Nhất"}
                        </div>
                        <div className="box-color">
                          <div className="color"></div>
                          <div className="color"></div>
                          <div className="color"></div>
                          <div className="color"></div>
                          <div className="color"></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
