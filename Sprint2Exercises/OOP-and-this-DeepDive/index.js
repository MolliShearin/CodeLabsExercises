//Implement sample codes that showcase basic OOP principles discussed in the the video lesson
//Set up User class and created constructor method to take in name, age, and favorite animal
class User {
    constructor(name, age, favoriteAnimal)
    {
        this.name = name;
        this.age = age;
        this.favoriteAnimal = favoriteAnimal;
    }
}

let user = new User("Murphy", 2, "cat");
console.log(user);

//Craft a simple code snippet that illustrates different behaviors of the "this" keyword based on context
class Car {
    constructor(make, year, sound)
    {
        this.make = make;
        this.year = year;
        this.sound = sound;
    }
    makeSound()
    {
        console.log(`The car makes a ${this.sound} sound.`);
    }
}
let myCar = new Car("Toyota", "2023", "vroom");
myCar.makeSound();

//Develop a class named "Playlist" that:
//Holds a list of video titles and their durations.
//Incorporates methods such as .addVideo(title, duration), .totalDuration(), and .averageDuration() to manage the video list.
class Playlist {
    constructor()
    {
        this.videos = [];
        this.duration = [];
    }
    addVideo(title, duration)
    {
       this.videos.push(title);
       this.duration.push(duration); 
    }
    
}   
let myPlaylist = new Playlist();
myPlaylist.addVideo("Fight Club", "2 hr 19 min");
console.log(myPlaylist);

