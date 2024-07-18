/**
 * call, bind, apply are type of polyfils provided by javascript 
 * to provide explicit binding with the objects
 */

let user = {
    nam: 'harinath',
    age: 23
}

/**
 * call() example
 */
function test(){
    console.log(this); // implicit binding to the the window object
}
test(); // in function test this keyword points to window obj

function testCall(arg1, arg2){
    console.log(this, arg1, arg2);
}

// call is function provided by javascript 
// call method is used for explicit binding
testCall.call(user, 'warangal', 'telangane');

/**
 * apply() example
 */
function testApply(arg1, arg2, arg3, arg4){
    console.log('implementing apply function');
    console.log(this)
    console.log(arg1, arg2, arg3, arg4);
}
let fruits = ['apple', 'banana', 'grapes', 'orange'];
testApply.apply(user, fruits) // we can not pass individual args

/**
 * 
 * bind() example
 * bind always returns to me a new binded function
 */
function testBind(age, proffession){
    console.log('implementing bind function');
    console.log(this);
    console.log(age, proffession);
}

let newBindedFun = testBind.bind(user, 'fixed arg'); // if we args to bind those are fixed

newBindedFun('sde', 23);

