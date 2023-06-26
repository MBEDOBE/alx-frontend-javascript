export default function appendToEachArrayValue(array, appendString) {
  let newArray = array;
  for (let value of array) {
    let idx = array.indexOf(value);
    newArray[idx] = appendString + value;
  }

  return newArray;
}
