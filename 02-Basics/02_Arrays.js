const marverHeros = ["IronMan", "SpiderMan", "Thor"];
const dcHeros = ["BatMan", "SuperMan", "Flash"];

// marverHeros.push(dcHeros);

// console.log(marverHeros);
// console.log(marverHeros[3][1]);

const allHeros = marverHeros.concat(dcHeros);

// console.log(allHeros);
// console.log(allHeros[4]);

const allNewHeros = [...marverHeros, ...dcHeros];

// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 0, [0, 1]]];

// console.log(anotherArray);

const realAnotherArray = anotherArray.flat(Infinity);

console.log(realAnotherArray);

console.log(Array.isArray("chinu"));
console.log(Array.from("chinu"));
console.log(Array.isArray({ name: "chinu" }));

let score = 100;
let scoreOne = 200;
let scoretwo = 300;

console.log(Array.of(score, scoreOne, scoretwo));
