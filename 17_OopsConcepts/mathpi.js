const result = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// console.log(result);

const chai = {
    name : "Ginger Chai",
    price : 250,
    isAvailable : true, 
    orderchai : function(){
        console.log("Chai mhi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
}
