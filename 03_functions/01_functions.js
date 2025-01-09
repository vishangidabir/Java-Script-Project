//----------function 1 -----------------

function addnumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addnumbers(3,4)

// console.log("Result : ", result);

//----------function 1 -----------------

function loginUserMessage(username) {
    // if(username === undefined){
        if(!username){
        console.log("Please enter a username !");
        return
    }
    return `${username} is just logged in`
}

// console.log(loginUserMessage("Pratik"));
console.log(loginUserMessage());

