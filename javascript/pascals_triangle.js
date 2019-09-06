//Divide and Conquer

function pascalsTri(row, col){
  if (col === 0 ) return 1;
  if (row === 0 ) return 0;
  return pascalsTri( row - 1, col - 1 ) + pascalsTri( row - 1, col );
}

let res ;
res = pascalsTri(5, 2);
console.log(res);
