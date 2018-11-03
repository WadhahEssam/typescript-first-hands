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
// Object 
// if you want to give a variable any value and you are not 
// sure what is it yet, but at the same time you don't want 
// this variable to change its value in the future you can 
// define it as an Object which i think it i a weird name
var prettySure = 4;
console.log(prettySure);
prettySure = '10.3';
console.log(prettySure);
