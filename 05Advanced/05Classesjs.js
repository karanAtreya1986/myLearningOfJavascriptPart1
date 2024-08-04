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
}

// let karan=new user("rocky", "rocky@rock.com"); //not preferred way to create objects inside class itself.

module.exports=user;