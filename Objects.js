// an object is collection of properties in the form of key and value pair
let user = {
    nam: "harinath",
    age: 23,
    isWorking: true
}

// delete keyword
console.log(user);
delete user.age;  // deletes the property from obj
console.log(user);

// key with spaces
let user1 = {
    nam: 'prikshith',
    'work location' : 'walmart'
}
console.log(user1["work location"]);
console.log(user.nam);
console.log(user['age']);

// dynamic keys
const key = 'firstName';
const value = 'prikshith';
let user2 = {
    [key]: value
}
console.log(user2);

// looping through objects
for(k in user){
    // we can not use user.k because k is in string format
    // console.log(k , '----> ', user.k);
    console.log(k , '----> ', user[k]);
}


