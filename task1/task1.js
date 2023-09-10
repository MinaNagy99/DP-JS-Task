class User {
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.password = password);
  }
}

class Register {
  constructor(user) {
    this.user = user;
  }
}

let BasicToken = "token123";
class validation {
  constructor(DB) {
    this.DB = DB;
  }

  validationOfData(email, password) {
    let user = this.DB.getUser(email);
    if (user) return user.password == password;
    return false;
  }

  validationOfToken(token) {
    if (token == BasicToken) return true;
    return false;
  }
}

class DataBase {
  constructor() {
    this.DBUsers = [];
  }
  addUser(user) {
    this.DBUsers.push(user);

  }
  getUser(email) {
    return this.DBUsers.find((user) => user.email == email);
  }
}

class ReqHandeler
{   
    constructor(validator){
        this.validator=validator
    }
    
    login(email,password,token){
        if (  this.validator.validationOfData(email,password)&&
        this.validator.validationOfToken(token)) {
            return 'user is valid'
        }else{
            return "user is't valid"
        }
      
    }
}





let userOne = new User("mina", "mina@g", "1234");
let userTwo = new User("mina", "ahmed@g", "1234");

let DB = new DataBase();
DB.addUser(userTwo);

DB.addUser(userOne);

DB.getUser("ahmed@g");

let ValidationObj = new validation(DB)

let ReqHandelerOne = new ReqHandeler(ValidationObj)

console.log(ReqHandelerOne.login('mina@g',"1234","token123"));




