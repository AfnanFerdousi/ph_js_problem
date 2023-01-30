function rotateLeft(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 4));