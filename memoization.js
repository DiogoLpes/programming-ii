const memo = new Map();  
function fib(n) {  
  if (n <= 1) return n;  
  if (memo.has(n)) return memo.get(n);  
  const result = fib(n - 1) + fib(n - 2);  
  memo.set(n, result);  
  return result;  
}  
console.log(fib(10)); // 55 (avoids redundant calculations)  