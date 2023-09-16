import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "../style.css";
function Products() {
  return (
    <>
      <div className="products">
        <p>Here are some of our products</p>
        <nav className="navigation">
          <NavLink className="links" to="read">
            new
          </NavLink>
          <NavLink className="links" to="unread">
            Hot deals
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Products;
