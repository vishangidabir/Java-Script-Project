//-------------------------this-----------
const user = {
    userName :  "Vishangi",
    price : 999,

    welcomeMessage : function(){
            console.log(`${this.userName}, welcome to website`);   
            console.log(this);
                     
    }
}
user.welcomeMessage()
user.userName = "pratik"
user.welcomeMessage()

console.log(this);


function chai() {
    let userName = "vishangi"
    console.log(this.userName);    
}
chai()

const chai = function() {
    let userName = "vishangi"
    console.log(this.userName);    
}
chai()

const chai = () => {
    let userName = "vishangi"
    console.log(this);    
}
chai()

//-------------------Arrow function-----
//-----------------Explicite return-----
const addTwo = (num1, num2) => {
    return num1 + num2
}

//---------------implicite return---------
const addTwo2 = (num1, num2) => num1 + num2

const addTwo3 = (num1, num2) => (num1 + num2)
//----------------for object--------------
const addTwo1 = (num1, num2) => ({userName : "vishangi"})
console.log(addTwo(3,4));

//----------------for loops---------------

const myArray = [2,5,8,6]

myArray.forEach(() => {})
