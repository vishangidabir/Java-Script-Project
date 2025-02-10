let myName = "vishangi"

// console.log(myName.trueLength);

let avengers = ["thor", "spider", "hulk"]

let avengersPower = {
    thor: "hammer",
    spider: "sling",
    hulk: "body",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spider}`);        
    }
}

Object.prototype.vish = function(){
    console.log(`Vishangi is presenting all object`);
    
}

Array.prototype.vishPrat = function(){
    console.log(`Pratik say hello`);
    
}

// avengersPower.vish()
// avengers.vish()
// avengers.vishPrat()
// avengersPower.vishPrat()


//Inheritance

const User = {
    name : 'chai',
    email: 'chai@gmail.com'
}

const Teacher = {
    makeVideo: true, 
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

//  old syntax :

Teacher.__proto__ = User

//  Mordern syntax :

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "chaiAurCode    "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()