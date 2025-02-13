const n1 = 7;
const n2 = 5;

// function declaration
function sudetis(a, b) {
  return a + b;
}
console.log(`${n1} + ${n2} = ${sudetis(n1, n2)}`);

// anonimines funkcijos logika, priskirta kitamajam
const skirtumas = function (a, b) {
  return a - b;
};
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// arrow function (rodykline funkcija) (liambda function)
const sandauga = (a, b) => {
  return a * b;
};
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// jei logikos bloke yra tik viena procedūra (grubiai tik vienas kabliataškis arba iškart return)
// galima nerašyti {} ir return
const dalyba = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${dalyba(n1, n2)}`);

// jeigu logikos bloke yra tik 1 parametras
// galima nerašyti ()
const kvadratu = (a) => a * a;

console.log(`${n1} * ${n1} = ${kvadratu(n1)}`);
console.log(`${n2} * ${n2} = ${kvadratu(n2)}`);

// Vardas -> V.

function name(v) {
  return v[0] + ".";
  // return [v.[0], ','].join('');
}
console.log(name("Chuck"));
console.log(name("Gintare"));
console.log(name("Rokas"));

const nameInit = (s) => s[0] + ".";

console.log(nameInit("Chuck"));
console.log(nameInit("Gintare"));
console.log(nameInit("Rokas"));

// 'Vardenis Pavardenis' -> 'V.P.'

function inicialai(fullName) {
  const nameParts = fullName.split(" ");
  const firstname = nameParts[0][0] + ".";
  const lastname = nameParts[1][0] + ".";
  return firstname + lastname;
}

console.log(inicialai("Vardenis, Pavardenis"));

// rodykline be naudos
const inicialaiArrow = (fullName) => {
  const nameParts = fullName.split(" ");
  const firstname = nameParts[0][0] + ".";
  const lastname = nameParts[1][0] + ".";
  return firstname + lastname;
};

console.log(inicialaiArrow("Vardenis, Pavardenis"));

function inicialai2(fullName) {
  const parts = fullName.split(" ");
  return nameInit(parts[0]) + nameInit(parts[1]);
}

console.log(inicialai2("Vardenis, Pavardenis"));

// 5 -> false
// 4  -> true
// 3 -> false

function isEven(n) {
  return n % 2 === 0;
  //   return !(n % 2);
}
// n:2
// !(n%2)
// !(4%2)
// !(0)
// !0
// !False
// true
console.log(isEven(3));

// Labas rytas, Lietuva! -> 3
// Ką tu? Ką vakare? -> 4

function sakinys(text) {
  return text.split(" ").length;
}
console.log(sakinys("Labas rytas, Lietuva!"));
console.log(sakinys("Ką tu? Ką vakare?"));

//su arrow
const sakinys2 = (text) => text.split(" ").length;

console.log(sakinys2("Labas rytas, Lietuva!"));
console.log(sakinys2("Ką tu? Ką vakare?"));
