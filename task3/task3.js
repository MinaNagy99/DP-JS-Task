class User 
{
    constructor(name,age,role){
        this.name=name
        this.age=age
        this.role = [role] 
    }
    addRole(role){
        this.role.push(role)
        console.log(this);
    }
    removeRole(role){
        this.role=this.role.filter(r=>r!=role)
        console.log(this);
    }
}

class Authorized 
{
    constructor(user){
        this.user=user
    }
    checkUserAuthorized(role){
        if (this.user.role.includes(role)) return true
        else return false
    }

}

const userOne = new User('mina',24,'user')

userOne.addRole('admin')

const checkAuthorized = console.log(new Authorized(userOne).checkUserAuthorized('manager'));