//Exercise 1: Basic Function Creation
//Create a function named greetUser that takes a name as a parameter and returns a greeting message
function greetUser(name)
{
    return (`Greetings, ${name}! :)`);
}
console.log(greetUser("Molli"));

//Exercise 2: Arrow Functions
//Convert a traditional function into an arrow function
let greet_user = user => (`Hello, ${user}`);
console.log(greet_user("Molli"));

//Exercise 3: Calculations Using Arrow Functions
let rectangleArea = (length, width) => length * width;
console.log(rectangleArea(3,4));

//Exercise 4: Object Creation and Manipulation
//Construct an object named student with properties like name, age, and grade
//Add a method to the object that prints the students details in the format: "NAME is AGE years old and is in GRADE grade"
let student = {
    name: "Henry",
    age: 10,
    grade: "5th",
    details: function(){
        console.log(`${student.name} is ${student.age} years old and is in ${student.grade} grade.`);
    }
}
student.details();

//Exercise 5: Advanced Object Methods
//Implement an object named library with properties for books(as an array) and methods to addBook(BookName) and removeBook(bookName)
//Ensure that the methods work correctly to add and remove books from the books array
let library = {
    books: [],
    addBook: function(bookName){
        this.books.push(bookName);
    },
    removeBook: function(bookName){
        let index = this.books.indexOf(bookName);
        this.books.splice(index, 1);
    }
}
//adding book called Henry is cute to the array
library.addBook("Henry is cute");
console.log(library.books);
//removing book called Henry is cute from the array
library.removeBook("Henry is cute");
console.log(library.books);

