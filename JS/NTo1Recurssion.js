const nToOneRecurssively = (n) => {
 if (n == 1)
 {
    return 1;
 }
 console.log(n)
 return nToOneRecurssively(n-1)
}

console.log(nToOneRecurssively(10))