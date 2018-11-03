
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
function warnUser(): void {
  console.log("this is a warning message");
}

// undefined and null
// for some reason undefined and null has their own types
// and you can assign their value to other values cuz as 
// they say ( are subtypes of all other types ) 
var u: undefined = undefined;
var n: null = null;

// in case if you are not sure if you want to pass a type 
// or undefined or null then you can use the union type 
var hello: string | undefined = 'hello';
var hello2: string | number = 2; // btw this worked without the union operator 
console.log(hello);
console.log(hello2);

// Never
// there is a function type called never, and this is 
// used where the function is not expected to return anything 
// maybe cuz of an infinite loop or cuz of throwing error or any
// other possiable reaon .
function infLoop(): never {
  while(true) {
     
  }
}

// object 
// this represent any of the non-premetive data types 
// os any thing that is not a number, string, boot, null , 
// undefined > you can just call it object ( with a small o) 
declare function create(o: object | null): void;

create({prop: 0});
create(null);
// create(42); // this will return error
// create('string'); // this will return error too 
// create(undefined) // this should return error to 
