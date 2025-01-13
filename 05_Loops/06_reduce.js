//------------------map-----------------

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newnums = myNumbers.map( (nnum) => nnum + 10)
// console.log(newnums);


// const myNumbers1 = [1,2,3,4,5,6,7,8,9,10]
// const newnums1 = myNumbers1
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)
// console.log(newnums1);


//------------------reduce-----------------

// const myNumb = [1,2,3,4,5]
// const mytotal = myNumb.reduce(function (acc, cur) {
//     console.log(`acc : ${acc} and cur : ${cur}`);
    
//     return acc + cur
// }, 0)



// const myNumb = [1,2,3,4,5]
// const mytotal1 = myNumb.reduce( (accu, cur)=> accu + cur, 0)
// console.log(mytotal1)



const shoppingcard = [
    {
        itemName : "cloths",
        price : 9000
    },
    {
        itemName : "shoes",
        price : 6000
    },
    {
        itemName : "beauty product",
        price : 12000
    },
    {
        itemName : "stationary",
        price : 5000
    }
]

const total = shoppingcard.reduce((acc, item) => acc + item.price ,0)
console.log(total);

