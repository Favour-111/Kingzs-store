import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
export default function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == "" || email == "" || password == "") {
      swal("Oops!", "please input field", "error");
    } else if (password.length < 4) {
      swal("Oops!", "password must be 4 digit", "error");
    } else {
      setName("");
      setPassword("");
      setEmail("");
      swal({
        title: "Success!",
        text: "Your account has been created!",
        icon: "success",
      });
      const user = { name: name, password: password, email: email };
      localStorage.setItem("details", JSON.stringify(user));
    }
  };
  return (
    <div className="container">
      <div className="formBox">
        <h1> sign-in Form</h1>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label>password</label>
            <input
              type="password"
              className="form-control"
              placeholder="input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="submit">
              <button type="submit" className="btn btn-primary">
                register
              </button>
              <button
                onClick={() => {
                  navigate("/forgot");
                }}
                className="footer"
              >
                forgot password
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="footer"
              >
                have an account? sign in
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
