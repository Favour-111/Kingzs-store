import React from "react";
import { useNavigate } from "react-router-dom";
function Forgotpass() {
  let navigate = useNavigate();
  return (
    <div>
      Forgotpass
      <button
        onClick={() => {
          navigate("/form");
        }}
      >
        Go Back
      </button>
    </div>
  );
}
export default Forgotpass;
