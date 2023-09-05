//construct an object representing a book, with properties such as title, author, publication year, and genre
let book = {
    title: "Cats Are The Best",
    author: "Molli",
    "publication year": 2023, //multiword property name must be in quotes
    genre: "cats",
}

console.log(book.title); //Cats Are The Best
console.log(book["publication year"]); //the way to access a multiword property inside an object //2023

//adding a property to the object
book.pages = 130; 
console.log(book);

//deleting a property from the object
delete book.genre;
console.log(book);

//modifying a property in an object
book.pages = 175;
console.log(book);