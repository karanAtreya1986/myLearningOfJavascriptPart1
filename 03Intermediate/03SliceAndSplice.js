var users=["Jim","Ted","Baker",1,2.5, true,false];
// console.log(users.slice(1,3));

// console.log(users.slice(1,4));

// console.log(users.slice(1));

// console.log(users.slice(3));

// console.log(users.slice(users.length));

// console.log(users.slice((users.length)-1));

// console.log(users.splice(1,2,"Hello")); //splice returns an array of deleted items. here first two items are deleted. check definition of splice for more information.

// users.splice(1,2,"Hello");
// console.log(users);


// users.splice(1,4,"Hello");
// console.log(users);

users.splice(1,4,"Hello", "John", 5.6, true, false, 55);
console.log(users);