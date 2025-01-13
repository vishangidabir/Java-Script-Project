// const coding = ['cpp', 'js', 'java', 'ruby', 'py']

// const values = coding.forEach((element) => {
//     console.log(element);
    
// })
// console.log(values);

//---------------------filters---------------------

// const myNums = [1,2,3,4,5,6,7]

// const newnums = myNums.filter( (num) => num > 5)       // if { } not used directly gives output
// const newnums1 = myNums.filter( (num) => {             // if { } used return 
//     return num > 5
// })

// console.log(newnums1);


// const newnums2 = []
// const myNums = [1,2,3,4,5,6,7] 

// myNums.forEach( (num) => {
//     if(num > 5){
//         newnums2.push(num)        
//     }
// })
// console.log(newnums2);



const books = [
    {
        title : 'Book 1', gentre : "Fiction", publish : 1998, edition : 2004
    },
    {
        title : 'Book 2', gentre : "Non-Fiction", publish : 1992, edition : 2010
    },
    {
        title : 'Book 3', gentre : "History", publish : 1999, edition : 2015
    },
    {
        title : 'Book 4', gentre : "Economy", publish : 1991, edition : 2001
    },
    {
        title : 'Book 5', gentre : "Science", publish : 1895, edition : 1995
    },
    {
        title : 'Book 6', gentre : "History", publish : 1975, edition : 2022
    },
    {
        title : 'Book 7', gentre : "Geography", publish : 1945, edition : 2019
    },
];

let userBooks = books.filter( (bk) => bk.gentre === "History")
userBooks1 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.gentre === "History"})


console.log(userBooks1);
