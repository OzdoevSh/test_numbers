export default function generateArray() {
  let arr = [];
  for (let i = 0; i < 169; i++) {
    arr.push(Math.floor(Math.random() * (100 + 100)) - 100);
  }
  return arr;
}
