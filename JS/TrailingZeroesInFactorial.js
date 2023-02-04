function trailingZeroesInFact(num){
let result = 0;
for(let i = 5 ;i<=num; i=i*5){
    result = result + (num/i)
}
console.log(result)
}

trailingZeroesInFact(25)