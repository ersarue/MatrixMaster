console.log('Addition:');
/* let myArr = [];
for (let i = 200; i <= 2700; i++) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    if (i % 15 !== 0) {
      myArr.push(i);
    }
  }
}
console.log(myArr); */
console.log('----------------------');

//---------------------------------

console.log('Shift the Values:');
/* let x = [2, 1, 6, 4, -7];
let newArray = [];
for (let i = x.length - 1; i >= 0; i--) {
  newArray.push(x[i]);
}
console.log(newArray); */
console.log('----------------------');

//---------------------------------

console.log('FizzBuzz:');
/* let myArr3 = [];
for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) {
    myArr3.push('FizzBuzz');
  } else if (i % 3 == 0) {
    myArr3.push('Fizz');
  } else if (i % 5 == 0) {
    myArr3.push('Buzz');
  }
}
console.log(myArr3); */
console.log('----------------------');

//---------------------------------

console.log('Fibonacci:');
/* let a = 0,
  b = 1,
  c = b;
for (let i = 0; i <= 10; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
} */
// another solution:
/* let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let i = 2; i <= 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci); */
console.log('----------------------');

//---------------------------------

console.log('Remove Negative:');
/* let arr = [1, -2, 4, 1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr.splice(i, 1);
  }
}
console.log(arr); */
console.log('----------------------');

//---------------------------------

console.log('Communist Censorship:');
let x = ['Man', 'I', 'Love', 'The', 'Restart', 'Bootcamp'];
let lastItem = x[x.length - 1];
for (let i = lastItem[0]; i < lastItem.length; i++) {
  console.log(lastItem.replace('B', 'A'));
}
console.log(lastItem);
console.log('----------------------');
