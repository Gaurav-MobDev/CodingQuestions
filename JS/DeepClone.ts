function deepClone(obj){
    let clone = {};
       for(const [key, value] of Object.entries(obj)){
        console.log('TYPE---', typeof value)
            if(typeof value === 'object'){
                console.log('____________________')
                console.log(value)
                if(Array.isArray(value)){
                    clone[key] =  value
                }else {
                    clone[key] =  deepClone(value)

                }
          }else {
            console.log('++++++++++++++++++++++++++++')
            console.log(value)
               clone[key] = value; 
          }
       }
    
        return clone;
    }

    const obj1 = {
        namee: 'Gaurav',
        age: 27,
        blood: 'A+',
        address: 'Sitomajra',
       friends: ['a','b','c','d'],
        nestedObj: {
            k: 'name',
            f: 'age',
            oneMoreObj: {
                g: 'pppp',
                h: 'qyyy',
                oneMore: {
                    e: 'qgg',
                    p:'ogvg',
                }
            },
        },
        sayHi: function(){
                let name = 'TEST';
                console.log(name);
        }
    }

    const clone = deepClone(obj1)
    console.log('///////')
    console.log(clone)
    clone.sayHi();
    console.log(clone)
    console.log(obj1)