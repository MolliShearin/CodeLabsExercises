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
//Implement inheritance by creating a subclass "ElectricCar" derived from the "Car" class, adding properties like batteryLife.
//For the "ElectricCar" class, override the displayInfo method to also include battery life information.
class ElectricCar extends Car {
    constructor(make, model, year,batteryLife)
    {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    displayInfo() {
        return (`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Battery Life: ${this.batteryLife}`);
    }
    
}

let car2 = new ElectricCar("Toyota", "Corolla", 2023, "250 miles");
console.log(car2.displayInfo());

//Exercise 4.1 
//Design a class "Student". Create an instance method that uses "this" to access the student's properties. Observe how "this" behaves within the class context.
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayStudentInfo() {
        return (`${this.name} is ${this.age} and is in the ${this.grade} grade.`);
    }
}

let student1 = new Student("Henry", 10, "5th");
console.log(student1);
console.log(student1.age)
console.log(student1.displayStudentInfo());
