function multiplyBy5(num) {
    return num * 5
}
multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(userName, score){
    this.userName = userName 
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new  createUser("chai", 25)
const coffe = createUser("coffe", 250)

chai.printMe()


/*

New Keyword :

A new object is created : The new keyword initiates the creation of new javascript object

A prototype is llinked : The newly created object gets linked to the prototype property of the constructor functions.
this means that it has access to properties amd methods define on the constructor's prototype

The constructor is called : The constructor function is called with the specified arguments and this is bound to the
newly created object.

*/