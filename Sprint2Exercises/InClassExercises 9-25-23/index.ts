//Exercise 1
console.log("Hello, World!");

//Exercise 2
let myName: string = "Molli";
console.log(myName);

//Exercise 3
function rectangleArea(length: number, width: number) {
    return (length * width);
}

console.log(rectangleArea(4, 5));

//Exercise 4
let num: number = 0;
if(num % 2 == 0)
{
    console.log("Number is even");
}
else
{
    console.log("Number is odd");
}

//Exercise 5
let number: number;
for(let number = 1; number <= 10; number++) 
{
    console.log(number);
}

//Exercise 6
const userName: string | null = prompt("Enter your name: ");
console.log("Hello, ${userName}");


//Exercise 7
