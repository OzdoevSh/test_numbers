import "./App.css";
import Table from "./components/Table";
import { useState } from "react";

export default function App() {
  const [more, setMore] = useState(false);
  const [less, setLess] = useState(false);

  function handleMoreThanZero() {
    setMore(true);
    setLess(false);
  }

  function handleLessThanZero() {
    setLess(true);
    setMore(false);
  }

  function handleAll() {
    setLess(false);
    setMore(false);
  }
  return (
    <div className="App">
      <Table less={less} more={more} />
      <div>
        <button className="buttonLess" onClick={handleLessThanZero}>
          Filter {"<"} 0
        </button>
        <button className="buttonAll" onClick={handleAll}>
          All
        </button>
        <button className="buttonMore" onClick={handleMoreThanZero}>
          Filter {">"} 0
        </button>
      </div>
    </div>
  );
}
