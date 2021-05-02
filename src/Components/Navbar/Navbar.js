import React from "react";

const navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light">
          covid <span className="text-success">O</span> meter
        </a>
        <form className="d-flex">
          <span class="navbar-text text-light pe-5">
            Stay Informed , Stay Safe !!
          </span>
        </form>
      </div>
    </nav>
  );
};
export default navbar;
