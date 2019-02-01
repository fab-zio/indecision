console.log('hey    ');
//uppercase is a convention for understanding that we are talking about classes
class Person {

    // = "Anonymous" allow me to assign a default value to the empty new Obj down below 
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;

        console.log('test');

    }
    getGretting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}
//Here below I create a subclass and I will extend the parent by use major
class Student extends Person {
    constructor(name, age, major) {
        // super call the parent argument and allow me to avoid to repeat this. ....
        super(name, age);
        this.major = major;
    }

    //now I can override
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}
const me = new Person('Fabrizio Musa');
console.log(me.getGretting());
const other = new Person();
console.log(other.getGretting());


const newGuy = new Student('Paolo Di Canio', 32, 'Football Academy');
console.log(newGuy.getDescription());
