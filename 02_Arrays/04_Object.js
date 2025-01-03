// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc",
tinderUser.name = "Sammy",
tinderUser.isLoogedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "Soma@gmail.com",
    fullName: {
        userFullName :  {
            firstName: "Somanya",
            lastName: "wagha"  
        }  
    }
}
// console.log(regularUser.email);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj4 = {5 : "e", 6 : "f"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },{
        id : 1,
        email : "h@gmail.com"
    }
]
users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoogedIn'));



const course = {
    courseName : "js in hindi",
    price : "99",
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor : inst } = course
console.log(inst);
