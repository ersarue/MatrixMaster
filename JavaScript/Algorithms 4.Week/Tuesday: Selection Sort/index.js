function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  console.log(arr);
}
sortArray([29, 72, 98, 13, 87, 66, 52, 51, 36]);

// Another way

// console.log([29, 72, 98, 13, 87, 66, 52, 51, 36].sort((a, b) => a - b))

// Another way

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) {
        indexOfMin = j;
      }
    }
    let temporary = array[indexOfMin];
    array[indexOfMin] = array[i];
    array[i] = temporary;
  }
  console.log(array);
}
selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]);
