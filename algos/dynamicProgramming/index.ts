let calculations = 0;
const fibonacciNumber = (n: number) => {
  calculations++;
  if (n < 2) {
    return n;
  } else {
    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
  }
};

let cache = new Map();
const fibonacciMemoized = (n: number) => {
  calculations++;
  if (n < 2) return n;
  if (!cache.has(n)) {
    cache.set(n, fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2));
  }
  return cache.get(n);
};

export const fibionacciComparisons = (n: number) => {
  console.time("fibonnaci");
  console.log(fibonacciNumber(n));
  console.log("Number of recursive calls: " + calculations);
  console.timeEnd("fibonnaci");

  calculations = 0;
  console.time("fibonnaci memoized");
  console.log(fibonacciMemoized(n));
  console.log("Number of recursive calls: " + calculations);
  console.timeEnd("fibonnaci memoized");
};
