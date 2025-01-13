// -----------------for loop--------------------

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");        
    }
    console.log(element);
}


for (let i = 0; i < 5; i++) {
    console.log(`Outer loop value : ${i}`);
    
    for (let j = 0; j < 5; j++) {
        console.log(`Inner loop value : ${j} and inner loop ${i}`);        
    }    
}

const myArray = ["flash","batman","spiderman","hulk","caption"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);    
}

//---------------break--------------

for (let index = 1; index < 10; index++) {
    if (index == 5) {
        break;
    }
    console.log(`value of i is ${index}`);    
}


//-------------continue-----------
for (let index = 1; index < 10; index++) {
    if (index == 5) {
        continue;
    }
    console.log(`value of i is ${index}`);    
}