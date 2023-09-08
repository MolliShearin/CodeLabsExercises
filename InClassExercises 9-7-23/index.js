//Exercise 1


//Exercise 2
//Draft a JavaScript function where you call a function before its declaration
mainFunction(); //called function before function was declared
function mainFunction() {
    console.log("Hoisted Function");
}

//Exercise 3
//Develop a JS function that returns another function
//The inner function should have access to variables from the outer function's scope
function outerFunction() {
    let x = "fluffyCats";
    return function() {
        console.log(x);
    }
}
const testClosureFunction = outerFunction();
testClosureFunction();



//Exercise 4
//Global variable
let catSound = "meow";
console.log(catSound); //meow

//Function trying to modify the global scope
function modifyGlobal() {
     catSound = "meeeew"; 
}

//Local scope variable
function localScopeTest() {
    let catSound = "MEOW!";
    console.log(catSound); 
}

modifyGlobal(); 
console.log(catSound); //meeeew
localScopeTest(); //MEOW!
console.log(catSound); //meeeew

//Another example Exercise 4
let fullName = "john Doe";

//local scope/function scope/inner scope
function changeMyName() {
    fullName = "Amy Amber";
}
 
changeMyName();
console.log(fullName);

function changeMyNameAgain() {
    let fullName = "Jimmy Doe";
    console.log("This is from changeMyNameAgain:", fullName);
}

changeMyNameAgain();

//Exercise 5
function functionFactory(param) {
    return function() {
        console.log(param);
    }
}
//last set of parentheses makes the function inside the function run
functionFactory("Hello World!")();

//Exercise 6
//Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JS hoists variable declarations
function hoistingTest() {
    console.log(x);
    let x = "cat";
}

hoistingTest();