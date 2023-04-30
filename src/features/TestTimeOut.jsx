import axios from "axios";
import React, { useState, useEffect } from "react";
import sendMail from "../api/sendMail";

export default function TestTimeOut() {
  const [couter, setCouter] = useState(0);
  useEffect(() => {
    if (couter <= 1) {
      handleload(couter);
      setCouter((prev) => prev + 1);
    }
  }, [couter]);
  const store = ({ type = "set", key, value }) => {
    if (type == "set") {
      localStorage.setItem(key, value);
    } else {
      return localStorage.getItem(key);
    }
  };

  const handleload = (num) => {
    let id = "d2d45";
    let local = store({ type: "get", key: "idd" });
    console.log(local, " + ", id);
    if (local !== id) {
      store({ type: "set", key: "idd", value: id });
      console.log(num);
    }
  };

  const handleClick = () => {
    sendMail.testTimeOut({ email: 1 }).then((data) => {
      console.log(data);
    });
  };
  return <div onClick={handleClick}>TestTimeOut</div>;
}
