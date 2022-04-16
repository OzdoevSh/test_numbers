export default function getBackground(value, array) {
  const newArray = array.sort()
  let result;
  if (value === newArray[newArray.length-1]) {
    return result = "rgb(65, 188, 156)";
  }
  if (value === newArray[0]) {
    return result = "rgb(191, 11, 27)";
  } 
   if (value === 0) {
    return result = "rgb(21, 24, 32)";
  }
}
