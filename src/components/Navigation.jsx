import React from "react";
import logo from "../img/logo.png";
import { Link, Outlet} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="container-menu">
        <div className="container-logo">
          <Link to="/">
            <img src={logo} alt="" className="" />
          </Link>
        </div>

        <div className="container-menu-items">
          <input
            type="text"
            className="Search-input"
            placeholder="Buscar Pelicula"
          />
          <button className="btn-search">Buscar</button>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
