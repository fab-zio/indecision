'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

const user = {
    name: 'Fab',
    cities: ['Roma', 'Bologna', 'Milano'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlaceLived());



//challange Area

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}


console.log(multiplier.multiply());
