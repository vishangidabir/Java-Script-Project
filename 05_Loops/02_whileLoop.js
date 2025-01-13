//----------------------While loop---------------

// while (condition) {
    
// }

let i = 0;
while (i <= 10) {
    console.log(`Value of index is ${i}`);
    i = i + 2;   
}

let myArray = ["flash", "batman", "spiderman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value of ${myArray[arr]}`);
    arr++;
}

//--------------------Do-While loop----------------

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 5);