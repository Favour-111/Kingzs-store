import React, { useEffect, useState } from "react";
import style from "../style.css";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="cardBody">
        {data.map((item) => (
          <div className="card">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button className="cardBtn">order</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
