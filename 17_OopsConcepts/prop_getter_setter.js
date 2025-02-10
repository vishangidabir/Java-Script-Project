function User(email, password) {
    this._emailemail = email
    this._passwordpassword = password

    Object.defineProperty(this, 'email',{
        get : function(){
            return this._email.toLowerCase()
        },
        set : function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password',{
        get : function(){
            return this._password.toLowerCase()
        },
        set : function(value){
            this._passwordpassword = value
        }
    })
}

const chai = new User ('chai@CHAI.com', "CHAI")
console.log(chai._email);
