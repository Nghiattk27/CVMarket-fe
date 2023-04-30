import React from "react";
import "./style.scss";

function Logo() {
  return (
    <div className="Logo d-flex align-items-center">
      <div className="cvBox d-flex">
        <div className="redBx">C</div>
        <div className="redBx">V</div>
      </div>
      <div
        className="marketBox ms-1"
        style={{
          fontWeight: "700",
          letterSpacing: "-1px",
        }}
      >
        market
      </div>
    </div>
  );
}

export default Logo;
