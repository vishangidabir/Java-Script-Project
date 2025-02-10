class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName : ${this.username}`);       
    }

    static createdId(){
        return `123`
    }
}

const vish = new User("Pratik")
// console.log(vish.createdId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const prachiti = new Teacher("Jitesh","jits@gmail.com")
console.log(prachiti.createdId());
