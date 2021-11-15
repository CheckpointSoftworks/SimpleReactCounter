import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default App;
