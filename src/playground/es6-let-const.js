var nameVar = "fab";
var nameVar = "rizio";
nameVar = "bel";
console.log('nameVar', nameVar);

let nameLet = 'Jack';
// let nameLet = 'Jack';


console.log('nameLet', nameLet);
// in both case you can reassign but in the let case you cannot double the variable
const nameConst = 'Frank';
// const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}
const petName = getPetName();

console.log(petName);

// Block Scoping
// just usinf in both variable var I am gonna get a result on console
// If I am gonna change the var with let or const within the block statement then it won't work  
var fullName = 'Fabrizio Musa';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);

}
console.log(firstName);

