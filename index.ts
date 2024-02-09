// Some data types in TypeScript

// Number

let age: number = 19;
let pi: number = 3.14;

// String

let name: string = "Hieu";

// Boolean

let isStudent: boolean = true;

// Array 

let numbers: number[] = [1,2,3];
let fruits: Array<string> = ["apple", "orange", "banana"];

// Tuple

let person: [string, number] = ["Hieu", 19];

// Enum

enum Color {
    Red,
    Green,
    Blue
}

let selectedColor: Color = Color.Green;

// Void

function logMessage(): void {
    console.log("This is a log message.");
}

// Object 

let person: { name: string, age: number } = { name: "Hieu", age: 19 };

// Never

function throwError(message: string): never {
    throw new Error(message);
}

// Union types

let value: number | string = 10;
value = "text";

// Intersection types

type A = { x: number };
type B = { y: number };
type C = A & B;

let obj: C = { x: 1, y: 2 };

// Type aliases

type Point = { x: number, y: number };
let p: Point = { x: 1, y: 2 };

// Function types

type AddFunction = (a: number, b: number) => number;
let add: AddFunction = (x, y) => x + y;

// Class types

class Person {
    name: string;
    age: number;
}

let hieu: Person = new Person();
hieu.name = "Hieu";
hieu.age = 19;
