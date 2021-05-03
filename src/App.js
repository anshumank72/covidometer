import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination/Pagination";

class App extends Component {
  state = {
    global: "",
    deta: [],
    searchCountry: "",
    currentPage: 1,
    detaPerPage: 20,
  };
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ global: data.Global, deta: data.Countries });
      });
  }
  render() {
    const indexOfLastPage = this.state.currentPage * this.state.detaPerPage;
    const indexOfFirstPage = indexOfLastPage - this.state.detaPerPage;
    const currentDeta = this.state.deta.slice(
      indexOfFirstPage,
      indexOfLastPage
    );
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
    const onChangeHandler = (e) => {
      this.setState({ searchCountry: e.target.value });
    };

    return (
      <div className="text-center bg-light">
        <Navbar />
        <Home global={this.state.global} />
        <Table
          countries={
            this.state.searchCountry === "" ? currentDeta : this.state.deta
          }
          searchCountry={this.state.searchCountry}
          onChangeHandler={onChangeHandler}
        />
        <Pagination
          detaPerPage={this.state.detaPerPage}
          totaldeta={this.state.deta.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default App;
