//Exercise 1
//Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
//When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
//Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.
//defining a class called Subject
class Subject {
    constructor() {
        //defining an instance property
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        //index = this.observers.indexOf(observer);
        //this.observers.splice(index, 1);
        this.observers = this.observers.filter(sub => sub !== observer)
    }

    notifyObservers() {
        //this.observers.forEach(observer => observer(this.observer));
        this.observers.forEach(sub => sub.update());
    }
}

class Observer {
    update() {
        console.log("Observer updated!");
    }
}

const subject = new Subject;
console.log(subject);
const observerOne = new Observer;
subject.addObserver(observerOne);
console.log(subject);
subject.notifyObservers();
