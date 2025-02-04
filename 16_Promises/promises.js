// const promiseOne = new Promise(function (resolve, reject) {
//     // Do as asyn task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');   
//         resolve()     
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promised consumed");    
// })

//----------------------------------------------------------------------

// new Promise((resolve, reject) => {
//         setTimeout(function(){
//             console.log("Asynk task 2"); 
//             resolve()           
//         },1000)
// }).then(function(){
//     console.log("Asynk resolved 2");
    
// })

//-----------------------------------------------------------------------

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: "vishangi", email: "vish@gmail.com"})
//     })
// })

// promiseThree.then(function(user){
//     console.log(user);    
// })

//-----------------------------------------------------------------------

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName: "vishangi", email: "vish@gmail.com"})
//         }else{
//             reject('Error : Something wents wrong !')
//         }            
//     },2000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.userName
// }).then((userName)=>{
//     console.log(userName);    
// }).catch(function(error){
//     console.log(error);    
// }).finally(()=> console.log("The promise is resolved or rejected !"))

//-------------------------------------------------------------------

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({userName: "Pratik", email: "pratk@gmail.com"})
//         }else{
//             reject('Error : Something wents wrong !')
//         }    
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);    
//     } catch (error) {
//         console.log(error);   
//     }  
// }

// consumePromiseFive()

//--------------------------------------------------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log("E : ",error);        
//     }   
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);    
})
.catch((error) => console.log(error))
