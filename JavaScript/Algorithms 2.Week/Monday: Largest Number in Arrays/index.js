function getLargestNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temporary = arr[i];
    let x = 0;
    for (let y = 0; y < temporary.length; y++) {
      if (temporary[y] > x) {
        x = temporary[y];
      }
    }
    newArr.push(x);
  }
  console.log(newArr);
}
getLargestNum([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
