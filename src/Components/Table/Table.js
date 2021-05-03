import React from "react";
const table = ({ countries, onChangeHandler, searchCountry }) => {
  return (
    <div className="bg-light mx-3">
      <form class="d-flex mb-4 float-end">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search for country"
          aria-label="Search"
          onChange={onChangeHandler}
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
          {}
          {countries
            .filter((val) => {
              if (searchCountry === "") {
                return val;
              } else if (
                val.Country.toLowerCase().includes(searchCountry.toLowerCase())
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
};

export default table;
