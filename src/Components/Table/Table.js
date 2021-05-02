import React, { Component } from "react";

class Table extends Component {
  state = {
    deta: [],
    searchCountry: "",
  };
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ deta: data.Countries });
      });
  }
  render() {
    return (
      <div className="bg-light mx-3">
        <form class="d-flex mb-4 float-end">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search for country"
            aria-label="Search"
            onChange={(e) => this.setState({ searchCountry: e.target.value })}
          />
        </form>
        <table className="table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">New Confirmed</th>
              <th scope="col">New Deaths</th>
              <th scope="col">New Recovered</th>
              <th scope="col">Total Confirmed</th>
              <th scope="col">Total Deaths</th>
              <th scope="col">Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            {this.state.deta
              .filter((val) => {
                if (this.state.searchCountry === "") {
                  return val;
                } else if (
                  val.Country.toLowerCase().includes(
                    this.state.searchCountry.toLowerCase()
                  )
                ) {
                  return val;
                }
              })
              .map((count) => {
                return (
                  <tr key={count.ID}>
                    <td>{count.Country}</td>
                    <td>{count.NewConfirmed}</td>
                    <td>{count.NewDeaths}</td>
                    <td>{count.NewRecovered}</td>
                    <td>{count.TotalConfirmed}</td>
                    <td>{count.TotalDeaths}</td>
                    <td>{count.TotalRecovered}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
