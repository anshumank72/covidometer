import React, { Component } from "react";

class Home extends Component {
  state = {
    totalCase: "",
    TotalDeath: "",
    totalRecovered: "",
    updated: "",
  };
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        this.setState({
          totalCase: data.Global.TotalConfirmed,
          TotalDeath: data.Global.TotalDeaths,
          totalRecovered: data.Global.TotalRecovered,
          updated: data.Global.Date,
        });
      });
  }

  render() {
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
                {this.state.totalCase}
              </h3>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Last updated {this.state.updated}
              </small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Total Deaths</h2>
              <h3 className="card-text text-danger my-3">
                {this.state.TotalDeath}
              </h3>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Last updated {this.state.updated}
              </small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Total Recovered</h2>
              <h3 className="card-text text-success my-3">
                {this.state.totalRecovered}
              </h3>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Last updated {this.state.updated}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
//const data = await request.json();
