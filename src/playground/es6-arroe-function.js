// Plain JS ES5//////////

const square = function (x) {
    return x * x
};

console.log(square(8));

// ARROW FUNCTION ES6/////////////
//here below you will first find the non concise way

// const squareArrow = (x) => {
//     return x * x;
// };

// And here the shortest expression

const squareArrow = (x) => x * x;
console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

console.log(getFirstName('Mike Smith'));
// SHOTEST WAY
const getLastName = (fullName) => fullName.split(' ')[1];
console.log(getLastName('Mike Smith'));


