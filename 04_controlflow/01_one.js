//----------------if----------------

const temp = 41
if(temp === 50){
    console.log("temp is less than 50");    
}else{
    console.log("temp is greater than 50");    
}
console.log("Executed");

//---------<, >, <=, >=, == !=, ===, !==

const score = 200

if (score > 100){
    let power = "fly"
    console.log(`User power : ${power} `);    
}
console.log(`User power : ${power} `);



const balance = 650

if(balance > 500) console.log("test");                                  //------proper code-------
if(balance > 500) console.log("test"), console.log("test2");           //-------not do that comma-----    

if(balance < 500){
    console.log("less than 500");    
}else if(balance >= 500 && balance <= 750){
    console.log("In between 500 to 750");    
}else if(balance >= 750 && balance <= 1000){
    console.log("In between 750 to 1000");    
}else{
    console.log("greater tha 1000");    
}

const userloggendIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggendIn && debitCard) {
    console.log("Allowed to shopping");    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");    
}

