import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style.css";
function Nav() {
  return (
    <div className="body">
      <NavLink className="link" to={"/"}>
        home{" "}
      </NavLink>
      <NavLink className="link" to={"/about"}>
        about{" "}
      </NavLink>
      <NavLink className="link" to={"/form"}>
        form
      </NavLink>
      <NavLink className="link" to={"/products"}>
        products
      </NavLink>
    </div>
  );
}

export default Nav;
