// Array

const myArray = [0,1,2,3,4,5]
console.log(myArray[2]);
const myArray1 = ["pratik", "vishangi"]
const myArray2 = new Array();

//Arrays methods

myArray.push(6)
myArray.push(7)
myArray.pop()
myArray.unshift(9)
myArray.shift()
console.log(myArray.includes(9));
console.log(myArray.indexOf(4));
const newArray = myArray.join()
console.log(myArray);
console.log(typeof newArray);

//slice, splice

console.log("A",myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);
const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);

