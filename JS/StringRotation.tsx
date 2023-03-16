const stringRotation = (string1, string2) => {
    if(string1.length !== string2.length){
        return
    }
 let startingIndexToMatch;
    for(let i = 0; i < string1.length; i++){
        if(string1[0] === string2[i]){
            console.log('match- ', i)
            startingIndexToMatch = i;
           // return;
        }
    }
let string2Index = startingIndexToMatch;
let string1Index = 0;
let limit = 0;
let isSame = true
    while(limit < string2.length){
        console.log(string1Index,' - ',string1[string1Index],' - ',string2Index,' - ',string2[string2Index], )

        if(string1[string1Index] !== string2[string2Index]){
            isSame = false
        }
        
        string2Index++;
        string1Index++;
        limit++;
        if(string2Index === string2.length){
            string2Index = 0;
        }
    }

    console.log('is same- ', isSame)
}

stringRotation('abcdefgh', 'cdeughab')