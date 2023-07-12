import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  const [inputvalue, setinputvalue] = useState(0);

  const decrement = () => {
    setinputvalue(inputvalue + 1);
  };
  const increment = () => {
    setinputvalue(inputvalue - 1);
  };
  return (
    <>
      <button onClick={increment}>-</button>
      <input type="number" placeholder="Enter something" value={inputvalue} />
      <button onClick={decrement}>+</button>
    </>
  );
};
export default Home;
