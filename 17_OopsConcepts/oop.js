//-------------------------This---------------------------
const user = {
    userName : "vishangi",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function() {
        // console.log("Got user details from db ");
        // console.log(`Username : ${this.userName}`);
        console.log(this);
        
    }
}
// console.log(this);
// console.log(user.userName);
// console.log(user.getUserDetails());


//-------------------------Constructor function---------------

// const promiseOne = new Promise() 
// const date = new Date()

// create empty object or instance 
// constructor function call by new keyword
// inject arguments by this keyword in new

function User(userName, logincount, signedIn) {
    this.userName = userName
    this.loginCount = logincount
    this.signedIn = signedIn
    this.greeting = function(){
        console.log(`welcome ${this.userName}`);        
    }
    return this
}

const userOne = new User("Vishangi", 30, true)
const userTwo = new User("Pratik", 4, false)
console.log(userOne.constructor);
// console.log(userTwo);

//InstanceOf