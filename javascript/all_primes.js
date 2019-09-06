

function allPrimesLessThan(n){
  while ( n > 0 ){
    if ( isPrime(n) ) console.log(n);
    n--;
  }
}


function isPrime(n){
  if ( n < 2 ) return false;
  if ( n < 4 ) return true;

  if ( n % 2 == 0 || n % 3 == 0 ) return false;

  for(let i = 5; i * i <= n; i += 6 ){
    if ( n % i == 0  || n % (i + 2) == 0) return false;
  }

  return true;
}

allPrimesLessThan(9);
