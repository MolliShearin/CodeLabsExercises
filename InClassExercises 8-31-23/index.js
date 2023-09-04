//Exercise 1
function greet(name)
{
    console.log(`Hello, ${name}!`);
}
greet("John");

//Exercise 2
function multiply(numberOne, numberTwo)
{
    return numberOne * numberTwo;
}
console.log(multiply(8, 4));

//Exercise 3
let person =
{
    name: "Murphy",
    age: 2,
    gender: "Male"
};

console.log(person);

//Exercise 4
let car =
{
    make: "Toyota",
    model: "RAV4",
    year: 2023
}

console.log(car.make);

//Exercise 5
function reverseString(str)
{
    return str.split("").reverse().join("")
};

console.log(reverseString("My cat Murphy is so cool"));

//Exercise 6
function calculateArea(radius)
{
    return Math.PI * (radius * radius);
}

console.log(calculateArea(5));

//Exercise 7
console.log(new Date());

//Exercise 8
console.log(Math.floor((Math.random() * 10) + 1));

//Exercise 9
//NONE???!

//Exercise 10
function howManyCats(numberOfCats)
{
    console.log(`You have ${numberOfCats} cats. SOOO many cats!`);
}

howManyCats(8);

//Exercise 11
user = 
{
    name: "Watson",
    age: 6,
    occupation: "Doctor"
};

function userObject(user)
{
    console.log(user);
}
