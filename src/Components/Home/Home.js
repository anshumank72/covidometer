import React from "react";

const home = ({ global }) => {
  return (
    <div className="container-fluid bg-light pb-5 ">
      <div>
        <h1>
          <span className="badge text-dark fw-normal p-4">
            Covid Count Across The Globe
          </span>
        </h1>
      </div>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Total Case</h2>
            <h3 className="card-text text-info my-3">
              {global.TotalConfirmed}
            </h3>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated:{global.Date}</small>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Total Deaths</h2>
            <h3 className="card-text text-danger my-3">{global.TotalDeaths}</h3>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated:{global.Date}</small>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Total Recovered</h2>
            <h3 className="card-text text-success my-3">
              {global.TotalRecovered}
            </h3>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated:{global.Date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default home;
//const data = await request.json();
