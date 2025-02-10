function setusername(userName) {
    this.userName = userName
    console.log("Called");
    
}

function createUsers(userName, email, password) {
    setusername.call(this, userName)

    this.email = email
    this.password = password
}

const chai = new createUsers("chai", "chai@gmail.com", "123")
console.log(chai);
