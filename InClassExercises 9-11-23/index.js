//Exercise 1
//Create three functions: one global, one as an object method, and an arrow function inside an object.
//Print the value of this inside each function.
function globalFunction(){
    console.log(this);
}
globalFunction();

function objectMethod () {

}

//Exercise 2
//Define a Person class with properties name and age.
//Add a method greet() to this class which outputs a greeting.
//Instantiate two different Person objects and invoke their greet methods.

class Person {
    constructor(name, age)
    {
        this.name = name;
        this.personAge = age;
    }

    get age() {
        return this.personAge;
    }

    set age(value) {
        if (value < 0) 
        {
            console.log("Invalid Age");
        } 
        else {
            this.personAge = value;
        }
        
    }

    greet() {
        console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
    }

    static info() {
        console.log("This is a Person class");
    }

}

let person1 = new Person("Cricket", 10);
let person2 = new Person("Murphy", 2);
person1.greet();
person2.greet();

//Exercise 3
//Modify your Person class. The constructor should now accept and initialize name and age properties.
//Create two different Person instances with unique names and ages.

//Exercise 4
//Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
//Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.
Person.info();

//Exercise 5
//Within your Person class, add getters and setters for the age property.
//Ensure with the setter that age can't be set to a negative value.
//Instantiate a Person object, try setting a negative age, and observe the results.
let person3 = new Person("Henry", 1);
person3.age = -3;
console.log(person3.age);

//Exercise 7
class Library {
    constructor() {
        this.booksArray = [];
    }

    addBook(Book) {
        this.booksArray.push(Book);
    }

}

class Book {
    #ISBN;
    
    constructor(ISBN, title, author, yearPublished)
    {
        this.#ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }


}

let library1 = new Library();
let book1 = new Book("278732984", "Cats", "Molli", "2012");
library1.addBook(book1);
console.log(library1);