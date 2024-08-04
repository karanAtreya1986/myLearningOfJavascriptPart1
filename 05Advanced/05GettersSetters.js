class user{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    #courselist=[];
    
    getinfo(){
        return {name:this.name, email:this.email};//this is how we return objects.
    }

    //this acts like setter only. any name can be given.
    enrollcourse(name){
        this.#courselist.push(name);
    }

    //this acts like getter, any name can be given.
    getcourselist(){
        return this.#courselist;
    }
}

// let karan=new user("rocky", "rocky@rock.com"); //not preferred way to create objects inside class itself.

module.exports=user;

const rocky=new user("rocky", "rocky@fighter.com");
console.log(rocky.getinfo());
rocky.enrollcourse("angular course");
console.log(rocky.getcourselist());
console.log(rocky.courselist);
