// Some data types in TypeScript
// Number
var age = 19;
var pi = 3.14;
// String
var name = "Hieu";
// Boolean
var isStudent = true;
// Array 
var numbers = [1, 2, 3];
var fruits = ["apple", "orange", "banana"];
// Tuple
var person = ["Hieu", 19];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var selectedColor = Color.Green;
// Void
function logMessage() {
    console.log("This is a log message.");
}
// Object 
var person = { name: "Hieu", age: 19 };
// Never
function throwError(message) {
    throw new Error(message);
}
// Union types
var value = 10;
value = "text";
var obj = { x: 1, y: 2 };
var p = { x: 1, y: 2 };
var add = function (x, y) { return x + y; };
// Class types
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var hieu = new Person();
hieu.name = "Hieu";
hieu.age = 19;
