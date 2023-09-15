//Diving into Classes
//Exercises 1.1 and 1.2

//Design a class named "Car" with properties: make, model, and year.
class Car {
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }
//Add a method to the Car class called displayInfo which logs the car's make, model, and year.
    displayInfo() {
        return (`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

//initiating a new instance of the car class
let car1 = new Car("Toyota", "RAV4", 2023);
console.log(car1.displayInfo()); //Make: Toyota, Model: RAV4, Year: 2023

//Understanding 'this' in Depth
//Exercises 2.1, 2.2, and 2.3

//'this' with a regular function references local scope
myCat1 = {
    name: "Cricket",
    age: 10,
    color: "black",
    sound: function () {
        console.log(this);
    }
}

myCat1.sound();
console.log(myCat1);

//'this' with arrow function references global scope
myCat2 = {
    name: "Henry",
    age: 0,
    color: "flame point",
    sound: () => {
        console.log(this);
    }
}

myCat2.sound();
console.log(myCat2);

//Practical OOP Scenerios
//Exercises 3.1 and 3.2
