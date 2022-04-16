import "./Item.css";
import getBackground from "../../utils/getBackground";
export default function Item(props) {
  const { number, less, more } = props;

  if (less) {
    if (number > 0 || number === 0) {
      return (
        <div style={{ background: "none" }} className="item">
          {number}
        </div>
      );
    }
  }
  if (more) {
    if (number < 0 || number === 0) {
      return (
        <div style={{ background: "none" }} className="item">
          {number}
        </div>
      );
    }
  }
  return (
    <div className="item">
      {number}
    </div>
  );
}
