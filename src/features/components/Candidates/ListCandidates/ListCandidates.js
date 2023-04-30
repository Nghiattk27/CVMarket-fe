import { Pagination } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userData } from "../../../admin/Slice/userSlice";
import "../../../scss/Candidates/Candidates.scss";
import SpinLoad from "../../Spin/Spin";
export default function ListCandidates() {
  const users = useSelector((state) => state.users.user.data);
  const loading = useSelector((state) => state.users.loading);
  const [state, setState] = useState({
    page: localStorage.getItem("pageUserHome") || 1,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [dataRender, setDataRender] = useState();

  const { page } = state;
  const dispatch = useDispatch();
  const actionResult = async (page) => {
    await dispatch(userData(page));
  };

  useEffect(() => {
    {
      users && setDataRender(users.rows);
    }
  }, [users]);

  useEffect(() => {
    localStorage.setItem("pageUserHome", page);
    actionResult({ page: page, status: 1 });
    window.scrollTo(0, 0);
    // setDataRender(users);
  }, [page]);

  const handldeSearch = (e) => {
    if (e.target.value === "") {
      setDataRender(users.rows);
    } else if (typeof users !== "undefined") {
      const dataview = users.rows.filter(
        (item) =>
          item.TypeOfWorks.length > 0 &&
          item.TypeOfWorks[0].name
            .toUpperCase()
            .includes(e.target.value.toUpperCase())
        // item.TypeOfWorks.length > 0 &&
        // item.TypeOfWorks.name.includes(e.target.value)
      );
      setDataRender(dataview);
    }
  };
  const handldeSearchName = (e) => {
    if (e.target.value === "") {
      setDataRender(users.rows);
    } else if (typeof users !== "undefined") {
      const dataview = users.rows.filter(
        (item) =>
          item && item.name.toUpperCase().includes(e.target.value.toUpperCase())
        // item.TypeOfWorks.length > 0 &&
        // item.TypeOfWorks.name.includes(e.target.value)
      );
      setDataRender(dataview);
    }
  };

  return (
    <div className="listCandidates">
      <div className="heading">
        <div className="heading__title">
          <h3>Ứng viên</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">
          {" "}
          <span>
            Tìm Kiếm Ứng Viên Theo Ngành
            <input
              type="text"
              placeholder="Tìm Kiếm Ứng Viên"
              onChange={(e) => handldeSearch(e)}
              className="mx-4"
            />
          </span>
          <span>
            Tìm Kiếm Ứng Viên Theo Tên
            <input
              type="text"
              placeholder="Tìm Kiếm Tên Ứng Viên"
              onChange={(e) => handldeSearchName(e)}
              className="mx-4"
            />
          </span>
        </div>
        <div className="row mt-5">
          {loading ? (
            <SpinLoad />
          ) : (
            typeof dataRender !== "undefined" &&
            dataRender &&
            // dataRender.rows.length > 0 &&
            dataRender.map((data, index) => (
              <div className="col-md-3 " key={index}>
                <div className="candidate__box">
                  <div className="candidate__box__img">
                    <img src={data.avatar} alt="" />
                  </div>
                  <div className="candidate__box__name">{data.name}</div>
                  <div className="candidate__box__job">
                    {data.TypeOfWorks.length > 0
                      ? data.TypeOfWorks[0].name
                      : "Chưa Cập Nhập"}
                  </div>
                  <div className="candidate__box__address">{data.address}</div>
                  <div className="candidate__box__viewProfile">
                    <Link to={`/candidates/${data.id}`}>Xem hồ sơ</Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {loading ? (
          <SpinLoad />
        ) : (
          <div className="pagination">
            <Pagination defaultCurrent={page} total={users.count} />
          </div>
        )}
      </div>
    </div>
  );
}
