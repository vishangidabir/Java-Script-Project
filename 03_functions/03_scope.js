// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30  
    // console.log("Inner :",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

//----------------nested scope--------------

function one() {
    const userName = "vishangi"

    function two() {
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website);
    
    two()
}
one()

//----------------if-else---------

if (true) {
    const userName = "vishangi"
    if (userName === "vishangi") {
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);  
}
// console.log(userName);


//------------------Function declartion ------

//By first method :

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

//By second method :

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
