const userEmail = ""

// if (userEmail) {
//     console.log("Got user email");    
// }else{
//     console.log("Do not have user email");
// }

//--------------falsy values--------

// false, 0, -0, BigInt, "", null, undefined, 0n, NaN

//--------------truthy values--------

// "0", "false", " ", [], {}, function(){}

//-----------Array------------
const userEmail1 = []
// if (userEmail1.length == 0) {
//     console.log("Array is empty");   
// }

//---------------Object--------

// const empobj = {}

// if (Object.keys(empobj).length == 0) {
//     console.log("object is empty");   
// }


//------------Nullish Coalescing Operator (??): null undifined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15


console.log(val1);


//-----------Terniary Oprator------------

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");


