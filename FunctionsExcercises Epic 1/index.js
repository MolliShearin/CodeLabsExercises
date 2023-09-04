//no parameter function displaying a greeting
function greeting()
{
    console.log("Hello!");
}

greeting();

//function accepting a name as its parameter to show a personalized greeting
function personalizedGreeting(name)
{
    console.log(`Hello, ${name}!`);
}

personalizedGreeting("Molli");

//function taking two numbers as parameters, returning their sum
function sumTwoNumbers(number1, number2)
{
    return number1 + number2;
}

console.log(sumTwoNumbers(2, 4));
