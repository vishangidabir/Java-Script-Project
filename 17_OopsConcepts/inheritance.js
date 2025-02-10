class User{
    constructor(userName){
        this.userName = userName
    }

    logMe() {
       console.log(`Username : ${this.userName}`);        
    }
}

class Teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Courses was added by ${this.userName}`);
    }
    
}

const study = new Teacher("Pratik", "prat@gamil.com","1245")
study.addCourse()

const study1 = new User("Vishangi")
study1.logMe()
study.logMe()

console.log(study instanceof User);
