import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  let HandleForm = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || confirm === "") {
      swal({
        title: "Error",
        text: "All fields are required",
        icon: "error",
      });
    } else if (password !== confirm) {
      swal({
        title: "Error",
        text: "Passwords do not match",
        icon: "error",
      });
    } else {
      e.preventDefault();
      console.log("name:" + name);
      console.log("email:" + email);
      console.log("password:" + password);
      console.log("confirm-password:" + confirm);
      setName("");
      setEmail("");
      setPassword("");
      setConfirm("");
      swal({ title: "DONE", text: "welcome", icon: "success" });
      <Link to="/"></Link>;
    }
  };
  return (
    <>
      <button onClick={() => navigate("/form")}>go back</button>
      <div className="container">
        <div className="formBox">
          <h1>Signup</h1>
          <form onSubmit={HandleForm}>
            <label>name</label>
            <input
              type="text"
              placeholder="username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>email</label>

            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label>password</label>

            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <label>confirm password</label>

            <input
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
            />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
