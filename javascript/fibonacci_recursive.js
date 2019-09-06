//  Divide and Conquer
//  Time Complexity of O(n square)
//


function fib_recursive(nth){
  if (nth < 1) return 0;
  if (nth < 3) return 1;
  return fib_recursive(nth - 1) + fib_recursive(nth - 2);
}

let res ;
res = fib_recursive(1);
console.log(res);
res = fib_recursive(2);
console.log(res);
res = fib_recursive(3);
console.log(res);
res = fib_recursive(4);
console.log(res);
res = fib_recursive(5);
console.log(res);
res = fib_recursive(8);
console.log(res);

