const karan={
    firstname: "karan",
    lastname: "Atreya",
    role: "admin",
    coursecount: 45,
    getinfo: function(){
        console.log(`first name is ${this.firstname}
            last name is ${this.lastname}
            role is ${this.role}
            the person is studying ${this.coursecount} courses`);
    }
};

const dj={
    firstname: "rock",
    lastname: "johnson",
    role: "sub admin",
    coursecount: 5
};

// karan.getinfo();
// dj.getinfo();

// karan.getinfo.bind(dj);

// karan.getinfo.bind(dj)();

var djinfo=karan.getinfo.bind(dj);
// djinfo();

// karan.getinfo.call(dj);

karan.getinfo.call();