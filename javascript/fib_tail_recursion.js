// Tail Recursion
// O(n) time and space

function getGetNthFib(nth, lastlast, last){
  if (nth == 0) return lastlast;
  if (nth == 1) return last;
  return getGetNthFib( nth - 1, last, lastlast + last );
}

let res ;
res = getGetNthFib(1, 0, 1);
console.log(res);
res = getGetNthFib(3, 0, 1);
console.log(res);
res = getGetNthFib(5, 0, 1);
console.log(res);
