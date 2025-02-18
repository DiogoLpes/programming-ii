function fibonacci(n) {
  const memo = new Map();
  function fib(n) {
    if (n <= 1) return n;
    if (memo.has(n)) return memo.get(n);
    const result = fib(n - 1) + fib(n - 2);
    memo.set(n, result);
    return result;
  }
  return fib(n);
}
console.time()
console.log(fibonacci(10)); // 55 (avoids redundant calculations)
console.timeEnd()
console.time()
console.log(fibonacci(25)); // 55 (avoids redundant calculations)
console.timeEnd()
console.time()
console.log(fibonacci(50)); // 55 (avoids redundant calculations)
console.timeEnd()
