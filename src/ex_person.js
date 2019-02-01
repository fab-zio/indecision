//Named exports (I could have as many as I want)
//Default export (I might have only one)

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };