// Primativew: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12.1; //can assign numbers and floats, but would give error if assigned a string

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = false;

// More complex types

// Defines an array that can only contain strings
let hobbies: string[];
hobbies = ["Cats", "Plants"];

// Define an object that can only have to key value pairs, where name is a string and age is a number
let person: {
    name: string;
    age: number;
};

person = {
    name: "Murphy",
    age: 2
};

// Define an array of objects with set key value pairs
let people: {
    name: string;
    age: number;
} [];

// Type inference

// typescript infers that the variable course is a string by what you assign to it
// could do let course: string = "React - The Complete Guide"; but it is redundant 
let course = "React - The Complete Guide";

// Union types
// Allows both types, string or number, to be assigned
let course1: string | number = "React - The Complete Guide";
course1 = 12345;

// Type alias
// Can define as alias for a complicated type
type Person = {name: string, age: number};
// Can then use the alias as a type
let anotherPerson: Person = {name: "Cricket", age: 10};
// Can combine the alias with other types like using the array
let morePeople: Person[] = [{name: "Watson", age: 6}, {name: "Mango", age: 4}];

// Functions and types
function add(a: number, b: number) {
    return a + b;
}

//this function has a return type called void.. meaning this function doesn't return anything
function print(value: any) {
    console.log(value);
}

// Generics
//Defining a generic type T using angle brackets
// Using T for the inputs and outputs means the data type of the input matches the data type of the output
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

// The demoArray is an array of numbers
const demoArray = [1, 2, 3];
// Typescript determines the input data type of demoArray and assigns the correct data type to the returned array
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]

class Student {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }
}

const student = new Student("Henry", "Shearin", 1, ["PlayTime"]);
student.enroll("Snacking");

//student.courses => PlayTIme, Snacking


// Interfaces- force us to set up a certain structure in classes
interface Human { //or type Human = {}
    firstName: string;
    age: number;

    greet: () => void;
}

let molli: Human;
molli = {
    firstName: "Molli",
    age: 30,
    greet () {
        console.log("Hello");
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log("Hello!!!!!!!");
    }
}

