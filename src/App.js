import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Table from "./Components/Table/Table";

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Navbar />
        <Home />
        <Table />
      </div>
    );
  }
}

export default App;
