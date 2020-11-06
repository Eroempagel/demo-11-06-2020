let array = ["value1", "value2", "value3"];

console.log(array[0]);

let object = {
  key: "value",
};

let babyCat1 = {
  name: "Midnight",
  lives: 9,
  age: "1 month",
};
let babyCat2 = {
  name: "Fluffy",
  lives: 8,
  age: "2 month",
};
let babyCat3 = {
  name: "Mittens",
  lives: 9,
  age: "1 year",
};

let papaCat = {
  name: "Bob",
  lives: 9,
  age: "8 years",
  kittens: [babyCat1, babyCat2, babyCat3],
};

let something = "lives";
console.log(babyCat2[something]);

console.log(papaCat.kittens[2]);

console.log(papaCat.kittens[2].age);

console.log(Object.keys[papaCat]);

console.log(
  "The dads name is " +
    papaCat.name +
    " and has " +
    papaCat.kittens.length +
    " kittens, the oldest kitten is " +
    papaCat.kittens[2].age +
    " old."
);

function logOutCatStuff(obj) {
  return `The dads name is ${obj.name} and has ${obj.kittens.length} kittens, the oldest kitten is ${obj.kittens[2].age} old.`;
}

let newString = logOutCatStuff(papaCat);
console.log(newString);
/*
let person = {
  name: "Cramer Grimes",
  location: "Indy",
  eyebrows: "true",
  facilitator: "true",
};
*/
