const country = 'India';

function address(){
    var state = 'Haryana';
    var city;
    var area;
    var houseNum;

    if(state == 'Haryana'){
        var city = 'Kalka';
        var area = 'Sitomajra';
        if(area == 'Sitomajra'){
            var houseNum = 100;
            console.log('Sub block scope ', houseNum)
        }
        console.log('if block scope ', houseNum)
    }
    console.log('functional block scope ', houseNum);

    function subAddress(){
        var locality = 'abc';
    }
    console.log('locality in functional block scope ', locality);
    subAddress()
}

address()
