const User = {
    _email : 'v@vCOM.in',
    _password : 'DFJ',

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
