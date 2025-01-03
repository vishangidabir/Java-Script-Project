const marvelHeros = ["Thor","Ironman","Spiderman"]
const dcHeroes = ["superman","batman","flash"]

marvelHeros.push(dcHeroes)
console.log(marvelHeros)
console.log(dcHeroes)

const newArray = marvelHeros.concat(dcHeroes)
console.log(newArray[3]);

const allHeros = [...marvelHeros,...dcHeroes]
console.log(allHeros);

const firstArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const secondArray = firstArray.flat(Infinity)
console.log(secondArray);


console.log(Array.isArray("vishangi"));
console.log(Array.from("vishangi"));
console.log(Array.from({name : "vishangi"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
