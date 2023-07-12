import React from "react";

const Home = () => {
  let inputvalue = 0;
  const decrement = () => {
    inputvalue -= 1;
  };
  const increment = () => {
    inputvalue += 1;
  };
  return (
    <>
      <input type="number" placeholder="Enter something" value={inputvalue} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};
export default Home;
