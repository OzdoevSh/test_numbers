import "./Table.css";
import { useState, useEffect } from "react";
import Item from "../Item";
import generateArray from "../../utils/generateArray";

export default function Table(props) {
  const array = generateArray();
  const { less, more } = props;
  const [numbers, setNumbers] = useState([]);


  useEffect(() => {
    
    setNumbers(array);
  }, []);

  return (
    <div className="table">
      {numbers.map((number) => {
        return <Item less={less} more={more} key={number} number={number} />;
      })}
    </div>
  );
}
