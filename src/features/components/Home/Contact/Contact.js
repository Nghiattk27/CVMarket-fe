import React from "react";
import "../../../scss/Home/Contact.scss";
import emailImg from "../../../images/email.jpg";
export default function Contact() {
  return (
    <div className="contact container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 "></div>
        <div className="col-12 col-lg-6 bg-white p-4 border rounded">
          <div className="contact__title">
            <h3>Liên hệ với chúng tôi</h3>
          </div>
          <div className="contact__detail">
            <p>
              Hãy chia sẻ cho chúng tôi biết nhu cầu của bạn hoặc bất kỳ điều gì
              bạn thắc mắc, chúng tôi luôn sẵn sàng lắng nghe!
            </p>
          </div>
          <div className="contact__gmail">
            <button className="border">
              <img src={emailImg} className="me-3"></img>
              <a href="mailto:19020051@vnu.edu.vn">Gửi Email</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
