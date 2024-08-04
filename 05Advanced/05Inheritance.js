class user{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    courselist=[];
    
    getinfo(){
        return {name:this.name, email:this.email};//this is how we return objects.
    }

    enrollcourse(name){
        this.courselist.push(name);
    }

    getcourselist(){
        return this.courselist;
    }

    //private method.
//    static login(){
//         return "You are logged in";
//     }

     login(){
        return "You are logged in";
    }
}

class subadmin extends user{

    constructor(name,email){
        super(name, email);
    }
    getadmininfo(){
        return "I am sub admin";
    }

    login(){
        return "I am from the sub admin class";
    }
}

// const tom = new subadmin();
const tom = new subadmin("tom", "tom@handy.com");

    console.log(tom.getadmininfo());
    console.log(tom.login());
    console.log(tom.getinfo());


module.exports=user;