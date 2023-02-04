function findGCD(num1, num2){
    let gcd = null;
    for(let i = parseInt(num2/2); i>= 2; i--){
        if((num1%i === 0)&& (num2%i === 0)){
            gcd = i
            console.log(gcd)
            return
        }
    }
    
}
findGCD(150,1500)
