
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);

// boolean 
var isDone: boolean = false;
if (user) {
  console.log('hey body');
}

// number 
var number: number = 8;
console.log(number);

// arrays 
var list: number[] = [1, 2, 3];

// another way for array 
var list: Array<number> = [1, 2, 3];

// tuple type << this is when you want to write an array but the 
// number of elements inside the array is known + the type of 
// each element is defferet
var tupleArray: [string, number] = ['hello', 10];
tupleArray[0].substring(1);
// tupleArray[1].substring(1); // Error 

// Enum 
// those values will be represented by numbers 
// if you want to print them or compare them 
enum Color {Red = 1, Green, Blue};
var colorVar: Color = Color.Blue;
console.log(colorVar);

// Any
// if you are not sure about the type of the variable yet 
// you can define it as any but i don't see how this can 
// be userful, cuz I can just leave it without any type 
// just like normal javascript, but as they say it helps 
// you with integrating javascript code and libraries into
// your projects
var notSure: any = 4;

// giving the return type of a function, and you can use 
// all the above types + the type void if you are returning
// nothing 
function warnUser() : void {
  console.log("this is a warning message");
}

