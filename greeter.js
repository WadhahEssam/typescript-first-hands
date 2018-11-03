function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
// boolean 
var isDone = false;
if (user) {
    console.log('hey body');
}
// number 
var number = 8;
console.log(number);
// arrays 
var list = [1, 2, 3];
// another way for array 
var list = [1, 2, 3];
// tuple type << this is when you want to write an array but the 
// number of elements inside the array is known + the type of 
// each element is defferet
var tupleArray = ['hello', 10];
tupleArray[0].substring(1);
// tupleArray[1].substring(1); // Error 
// Enum 
// those values will be represented by numbers 
// if you want to print them or compare them 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorVar = Color.Blue;
console.log(colorVar);
// Any
// if you are not sure about the type of the variable yet 
// you can define it as any but i don't see how this can 
// be userful, cuz I can just leave it without any type 
// just like normal javascript, but as they say it helps 
// you with integrating javascript code and libraries into
// your projects
var notSure = 4;
// giving the return type of a function, and you can use 
// all the above types + the type void if you are returning
// nothing 
function warnUser() {
    console.log("this is a warning message");
}
// undefined and null
// for some reason undefined and null has their own types
// and you can assign their value to other values cuz as 
// they say ( are subtypes of all other types ) 
var u = undefined;
var n = null;
// in case if you are not sure if you want to pass a type 
// or undefined or null then you can use the union type 
var hello = 'hello';
var hello2 = 2; // btw this worked without the union operator 
console.log(hello);
console.log(hello2);
// Never
// there is a function type called never, and this is 
// used where the function is not expected to return anything 
// maybe cuz of an infinite loop or cuz of throwing error or any
// other possiable reaon .
function infLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
create(42); // this will return error
create('string'); // this will return error too 
create(undefined); // this should return error to 
