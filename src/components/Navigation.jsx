import React from "react";
import logo from "../img/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const Navigation = () => {
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };
  return (
    <>
      <div className="container-menu">
        <div className="container-logo">
          <Link to="/">
            <img src={logo} alt="" className="" />
          </Link>
        </div>

        <div className="container-menu-items">
          <form onSubmit={onSearchSubmit} className="search-form">
            <input
              type="text"
              className="Search-input"
              placeholder="Buscar Pelicula"
              name="valueSearch"
              id=""
              Value={valueSearch}
              onChange={onInputChange}
            />
            <button className="btn-search">Buscar</button>
          </form>
          <Link to="/favorites" className="btn-favorite">
            Ver Favoritos
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
