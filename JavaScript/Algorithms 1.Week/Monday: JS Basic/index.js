console.log('numbers from 1 to 135:');
function counter() {
  for (let i = 1; i <= 135; i++) {
    console.log(i);
  }
}
counter();
console.log('----------------------');

//---------------------------------

console.log('odd numbers from 1 to 135:');
function counter2() {
  for (let i = 1; i <= 135; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
counter2();
console.log('----------------------');

//---------------------------------

console.log('sum of the numbers from 1 to 135:');
function counter3() {
  let sum = 0;
  for (let i = 1; i <= 135; i++) {
    sum = sum + i;
    console.log('Num: ' + sum);
    console.log(`Number: ${i}`);
    console.log(`Sum: ${sum}`);
  }
}
counter3();
console.log('----------------------');

//---------------------------------

console.log('Print the elements of an array:');
function counter4(myArr) {
  for (let i = 0; i <= myArr.length - 1; i++) {
    console.log(myArr[i]);
  }
}
counter4([2, 4, 5, 1, 4, 76, 121, 78]);
console.log('----------------------');

//---------------------------------

console.log('Find Max:');
function counter5(myArr) {
  let max = myArr[0];
  for (let i = 0; i <= myArr.length; i++) {
    if (myArr[i] > max) {
      max = myArr[i];
    }
  }
  console.log(max);
}
counter5([2, 1, 4, -76, 121, 0]);
// console.log('----------------------');

//---------------------------------

console.log('Find Max - without a function:');
let myArr2 = [2, 321, 76, -23, 0, -132, 1212];
let maxNumber = myArr2[0];
for (let i = 0; i < myArr2.length; i++) {
  if (myArr2[i] > maxNumber) {
    maxNumber = myArr2[i];
  }
}
console.log(maxNumber);
// console.log('----------------------');

//---------------------------------

console.log('Get Average:');
let myArr3 = [2, 321, 76, -23, 0, -132, 1212];
let sum = 0;
for (let i = 0; i < myArr3.length; i++) {
  sum += myArr3[i];
}
console.log(`Average: ${sum / myArr3.length}`);
console.log('----------------------');

//---------------------------------

console.log('Eliminate the Negatives:');
let myArr4 = [2, 321, 76, -23, 0, -132, 1212];
for (let i = 0; i < myArr4.length; i++) {
  if (myArr4[i] < 0) {
    myArr4[i] = 0;
  }
}
console.log(myArr4);
console.log('----------------------');

//---------------------------------

console.log('Number to String:');
let myArr5 = [2, -1, 76, -23, 0, -132, -100];
for (let i = 0; i < myArr5.length; i++) {
  if (myArr5[i] < 0) {
    myArr5[i] = 'Turing';
  }
}
console.log(myArr5);
console.log('----------------------');
