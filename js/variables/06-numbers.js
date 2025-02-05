/*
Numbers

- sveikieji, dešimtainiai
- teigiami, neigiami
- infinity, NaN (skaičiaus tipo klaida)
- 
*/

const n1 = 1;
console.log(n1);

const n2 = -5;
console.log(n2);

const n3 = 3.14;
console.log(n3);

const n4 = -2.727;
console.log(n4);

const n5 = Infinity;
console.log(n5);

const n6 = -Infinity;
console.log(n6);

const n7 = -9999999999;
console.log(n7);

const n8 = NaN;
console.log(n8);

// 'labas rytas' / 2 = NaN

console.log("Labas" * 2);

console.log("Labas" + 2); // + sujungia operacijas ir priima kaip string (tekstą)

console.log(7 / 5);
console.log(7 - 5);
console.log(7 % 5);
console.log(7 + 5);
console.log(7 * 5);
console.log(7 ** 5); // dviguba žvaigždė kelia laipsniu

console.clear();

// Math - Matematinių funkcijų "biblioteka"

// Matematinės konstantos

console.log(Math.E);
console.log(Math.PI);

// Math.abs

console.log(Math.abs(-5));
console.log(Math.abs(5));

// Triogonometrija

console.log(Math.sin(30)); // sinusas skaičiuojamas Radianais
console.log(Math.cbrt(8)); // kubinė šaknis
console.log(Math.cos((30 * Math.PI) / 180)); // Laipsniai paversti į Radianus

// Apvalinimas
console.log("Ceil apvalina į viršų");
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.1));

console.log("Floor apvalina į apačią");
console.log(Math.floor(9.5));
console.log(Math.floor(9.1));

console.log("Round apvalina normaliai");
console.log(Math.round(9.5));
console.log(Math.round(9.1));

console.log('trunc "apvalina" numesdamas viską kas po kablelio');
console.log(Math.trunc(9.5));
console.log(Math.trunc(9.1));
console.log(Math.trunc(-9.1));
console.log(Math.trunc(-9.5));

console.log(Math.sign(-3)); // gražina tik teigimas ar neigimas +- 1 arba +-0

console.log(Math.pow(2, 3), 2 ** 3);

console.log(Math.exp(2), Math.E ** 2);

console.log(Math.hypot(3, 4), Math.sqrt(3 ** 2 + 4 ** 2)); // Pitagoro teorema
console.log(Math.hypot(3, 3, 3), Math.sqrt(3 ** 2 + 3 ** 2 + 3 ** 2)); // Pitagoro teorema

console.log(Math.min(1, 3, 5.5, -2.7, 99)); // randa mažiausią
console.log(Math.max(1, 3, 5.5, -2.7, 99));
console.log(Math.max(1, 3, 5.5, -2.7, NaN, 99));

console.log(Math.random()); // sugeneruoja bet kokį skaičių nuo 0 iki 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// generuojamas atistikrinis skaičius intervale

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(10, 20));

// jei reikia 10 random numeriu

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 10; i++) {
  console.log(i, randomNumber(10, 20));
}

console.log((3.1415).toFixed(2)); // kiek palikti po kablelio, supranta kaip tesktą.

// apvalinimas paliekant skaičiumi dešimtainę dalį
function apvalinimas(n, amount) {
  return Math.round(n * 10 ** amount) / 10 ** amount;
}

console.log(apvalinimas(9.5, 2));
console.log(apvalinimas(3.141525, 2));

console.clear();

let k = 5;
console.log(k);

k = k + 10;
console.log(k);

k += 10;
console.log(k);

k -= 10;
console.log(k);

k *= 10;
console.log(k);

k /= 10;
console.log(k);

k++; // operacijos ieliškumas (skaičius, tada padidina vienu vienetu)
console.log(k);

++k; // pirma prideda 1 tada rodo skaičių
console.log(k);

console.log(k++);
