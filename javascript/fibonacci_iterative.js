// 
//


function fib_iterative(nth){
  let pre = 1;
  let prepre = 0; 
  let num = 0;
  let i = 1;

  if (nth <= 1 ){
    console.log(nth);
    return;
  }

  while (i < nth){
    num = pre + prepre;
    prepre = pre;
    pre = num;
    i++;
  }

  console.log(num);
}

fib_iterative(1);
fib_iterative(2);
fib_iterative(3);
fib_iterative(4);
fib_iterative(5);
fib_iterative(6);

