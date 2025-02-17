const numbers = [1, 2, 3, 4];
const numbers2x = [];

for (let i = 0; i < numbers.length; i++) {
  numbers2x.push(numbers[i] * 2);
}
console.log(numbers2x);

// sutrumpinta
function triple(n) {
  return n * 3;
}
const numbers3x = numbers.map(triple);
console.log(numbers3x);

//dar trumpiau
const multi5 = (n) => n * 5;

const numbers5x = numbers.map((n) => n * 5);
console.log(numbers5x);

const dic = ["Labas", "rytas", "Lietuva"];
const letters = dic.map((s) => s[0]);
console.log(letters);

const gg = "Gera gira geroj girioj gera gerti";
const ggInit =
  gg
    .split(" ")
    .map((s) => s[0])
    .join(".") + "!";
console.log(ggInit);

function pirmasSimbolis(s) {
  return s[0];
}
const kk = ["Aa1", "Bb2", "Cc3"];
const kkresult = kk.map((s) => s[2]);
console.log(kkresult);

const pp = [];
pp[1] = 3;
console.log(pp);

delete pp[2];
console.log(pp);

pp[3] = 6;
console.log(pp); // [ <1 empty item>, 3, <1 empty item>, 6 ]

delete pp[3]; // [ <1 empty item>, 3, <2 empty items> ]
console.log(pp, pp.length);

const luckyNumbers = [0, 1, 5, 7, 13, 28, 66, 69];
console.log(luckyNumbers);

const bigerLucky = luckyNumbers.map((n) => n * 10);
console.log(bigerLucky);

// [0, 1, 5, 7, 13, 28, 66, 69] -> [26, 66, 69]
// 1 - grazinti didesnius uz 20

const bigLucky1 = luckyNumbers.filter((n) => n > 20);
console.log(bigLucky1);

// grazinti mazesnius uz 50
const bigLucky2 = luckyNumbers.filter((n) => n < 50);
console.log(bigLucky2);

const six1 = luckyNumbers.filter((n) => n % 10 === 6);
console.log(six1);

const sixFirst = luckyNumbers.filter((n) => ("" + n)[0] === "6");
console.log(sixFirst);

const students = ["Jonas", "Maryte", "Petras", "Ona"];
console.log(students);
const nameSize = students.map((s) => s.length);
console.log(nameSize);

// vardai ilgesni nei 5 simboliai
const longNames = students.filter((s) => s.length > 5);
console.log(longNames);

const longNameMAP = students.map((s) => s.length > 5);
console.log(longNameMAP);

//  ['J.', ...]

const studentsInitials = students.map((name) => name[0] + ".");
console.log(studentsInitials);

// 1 - Vardai kurie nesibaigia su raide 'S'
// 2 Vardai kurie baigiasi su raide 'e' arba a''
const womanNames1 = students.filter((name) => name.at(-1) !== "s");
console.log(1, womanNames1);

const womanNames2 = students.filter(
  (name) => name.at(-1) === "e" || name.at(-1) === "a"
);
console.log(2, womanNames2);

// string.endsWith()

const womanNames3 = students.filter(
  (name) => name.endsWith("e") || name.endsWith("a")
);
console.log(3, womanNames3);

const womanNames4 = students.filter((name) => !name.endsWith("s"));
console.log(4, womanNames4);

// array.includes()
const womanNames5 = students.filter((name) => ["e", "a"].includes(name.at(-1)));
console.log(5, womanNames5);

const womanNames6 = students.filter((name) => "ea".includes(name.at(-1)));
console.log(6, womanNames6);

console.clear();

const abc = ["a", "b", "c", "d", "e", "f"];
console.log(abc);

// [0, 1, 2, 3, 4, 5]
//  ^     ^     ^
//  a     c     e
// ['a', 'c', 'e']

const evenAbc = abc.filter((s, i) => i % 2 === 0);
console.log(evenAbc);

// atrinkti žodžius, kuriuose yra papildoma raidė, tokia kokia jie prasideda
const words = ["labas", "ananasas", "tuktukas", "vasara"];
const doubleWords1 = words.filter((w) => w.slice(1).includes(w[0]));
console.log(doubleWords1);

const doubleWords2 = words.filter((w) => w.indexOf(w[0], 1) > 0);
console.log(doubleWords2);

const colors = ["red", "green", "blue", "yellow", "red", "orange"];
console.log(colors);

const colors2 = colors.map((item, index, list) => item);
console.log(colors2);

const colors3 = colors.map((item, index, list) => list[index]);
console.log(colors3);

// rasti visas spalvas, kurios kartojasi
// rasti visas spalvas, kurios yra unikalios

const colorRepeat = colors.filter(
  (color, index, list) => list.indexOf(color) !== list.lastIndexOf(color)
);
console.log("-----");
console.log(colorRepeat);

const colorRepeat1 = colors.filter(
  (color, index, list) => list.indexOf(color) !== index
);
console.log(colorRepeat1);
