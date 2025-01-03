// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pratik",
    "full name": "Pratik Pedhavi",
    age: 30,
    loaction: "Alibag",
    [mySym] : "mykey1",
    email:"pratik04@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "pratik@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "pratik@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingNew = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingNew());