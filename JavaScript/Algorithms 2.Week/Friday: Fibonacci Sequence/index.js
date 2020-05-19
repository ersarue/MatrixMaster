let fib = [];
fib[0] = 0;
fib[1] = 1;
function getFibonacci(n) {
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib);
  }
}
getFibonacci(5);
