import React from "react";
import style from "../style.css";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="landingPage">
        <div className="landingImg">
          <div className="content">
            <section className="text">Welcome to kingz store</section>
            <p className="info">
              for more information click on the readmore button
            </p>
            <button
              className="btn"
              onClick={() => {
                navigate("/about");
              }}
            >
              readmore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
