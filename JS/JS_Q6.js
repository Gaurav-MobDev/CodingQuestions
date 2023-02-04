let nonMemoize = function(x){
    return x*x;
}

let memoize = function(){
    let memoizedVal = {};
    return (x) => {
        if(x in memoizedVal){
            console.log('memoized->', memoizedVal)
            return memoizedVal[x];
        }else{
        
            memoizedVal[x] = x*x;
            console.log('non memoized->', memoizedVal)
    
            return x*x;
        }
    }
}
let nm  = nonMemoize;
console.log(nm(5))
console.log(nm(6))
console.log(nm(5))
let m  = memoize();
console.log(m(8))
console.log(m(9))
console.log(m(8))