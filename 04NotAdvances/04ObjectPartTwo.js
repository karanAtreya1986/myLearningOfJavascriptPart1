var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is ${this.name}`);
    },
};

var karan=Object.create(User);
// console.log(karan);
// karan.getUserName();

// karan.name="Jackson";
// karan.getUserName();

var sam=Object.create(User,{
    name: {value: "Samme"},
    courseCount: {value: 56},
});
sam.getUserName();
