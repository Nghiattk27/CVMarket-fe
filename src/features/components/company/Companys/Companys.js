import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { companyData } from "../../../admin/Slice/companySlice";
import "../../../scss/Companys/Company.scss";
import SpinLoad from "../../Spin/Spin";
export default function Companys() {
  const companys = useSelector((state) => state.companys.company.data);
  const loading = useSelector((state) => state.companys.loading);

  const [dataRender, setDataRender] = useState();
  const [state, setState] = useState({
    page: localStorage.getItem("pagecompanyHome") || 1,
  });
  const { page } = state;
  const dispatch = useDispatch();
  const actionResult = async (page) => {
    await dispatch(companyData(page));
  };
  useEffect(() => {
    localStorage.setItem("pagecompanyHome", page);
    actionResult({ page: page, status: 1 });
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    {
      companys && setDataRender(companys.rows);
    }
  }, [companys]);

  const handldeSearch = (e) => {
    if (e.target.value === "") {
      setDataRender(companys.rows);
    } else if (typeof companys !== "undefined") {
      const dataview = companys.rows.filter(
        (item) =>
          item && item.name.toUpperCase().includes(e.target.value.toUpperCase())
        // item.TypeOfWorks.length > 0 &&
        // item.TypeOfWorks.name.includes(e.target.value)
      );

      setDataRender(dataview);
    }
  };

  return (
    <div className="companys">
      <div className="heading">
        <div className="heading__title">
          <h3>Công ty</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap mb-5">
          Tìm Kiếm Công Ty
          <input
            type="text"
            placeholder="Tìm Kiếm Công Ty"
            onChange={(e) => handldeSearch(e)}
            className="mx-4"
          />
        </div>
        <div className="row">
          {loading ? (
            <SpinLoad />
          ) : (
            dataRender &&
            dataRender.map((data, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="company__box"
                  style={{
                    background: `url(${data.banner}) repeat center`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="company__bg">
                    <div className="company__box__avatar">
                      <img src={data.avatar} alt="" />
                    </div>
                    <div className="company__box__name">{data.name}</div>
                    <div className="company__box__address">
                      <span>{data.address}</span>
                    </div>
                    <div className="company__box__button">
                      <Link to={`/companys/${data.id}`}>Xem thêm</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {loading ? (
            ""
          ) : (
            <div className="pagination">
              <Pagination defaultCurrent={page} total={companys.count} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
