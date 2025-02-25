const number = 3.14;
const numberError = NaN;

console.log(number.toFixed(2)); // skaičiai po kablelio ir paverčia skaičių į String

console.log(7 + 5);
console.log(7 % 5);
console.log(7 ** 5);

let i = 0;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

i += 2;
i -= 2;
i *= 2;
i /= 2;
i %= 2;
i **= 2;

const text = "Labas rytas, Lietuva";
const kabutes = "Vienguba (').";
const kabutes2 = `Vienguba (').`;
const textWithNumber = `My favorite number is ${number}`;
const symbolCount = text.length;

console.log(text[0]);
console.log(text.charAt(-1));
console.log(text.includes("Labas"));
console.log(text.replace(" ", "-=-"));
console.log(text.split(" "));
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());
console.log(text.trim());

const yes = true;
const no = false;

const marks = [10, 2, 8, 4, 6];

console.log(marks.length);
console.log(marks.filter((n) => n > 5));
console.log(marks.includes(10));
console.log(marks.indexOf(10));
console.log(marks.join(" - "));
console.log(marks.map((n) => n * 100));
console.log(marks.push(8));
console.log(marks.slice(1, 3));
console.log(marks.reverse());

const person = {
  name: "Jonas",
  age: 99,
  isMaried: true,
};

console.log(person["age"]);
console.log(person.name);

console.log(Object.keys(person));
console.log(Object.keys({}));
console.log(Object.keys({ marks: [] }));

const a1 = [1, 11];
const a2 = [2, 22];
const a12 = [...a1, ...a1, ...a2, ...a2];
console.log(a12);

const o1 = { color: "red" };
const o2 = { height: "1m" };
const o3 = { widh: "3m" };
const o123 = { ...o1, ...o2, ...o3, extra: "extra" };
console.log(o123);

const { name, age, ...personRest } = person;
console.log(name, age, personRest);

const numbers = [10, 2, 8, 4, 6];
const [n1, n2, ...nRest] = numbers; // 10 2 [ 8, 4, 6 ] ištraukia iš masyvo skaičius
console.log(n1, n2, nRest);

if (true) {
} else {
}

if ("Labas".includes("a")) {
}
console.log(typeof 5); // number
console.log(typeof "asd"); //  string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof {}); //  object
console.log(typeof []); //  object
console.log(typeof undefined); // undefined
console.log(typeof (() => {})); // function
console.log(typeof null === null); //   false
console.log(typeof [] === null); //   false
console.log(typeof {} === null); //   false
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); //  false
console.log(Array.isArray(5)); // false

switch (5) {
  case 1:
    // do smthg...
    break;
  case 5:
    // do smthg...
    break;
  default:
  // do smthg...
}

const arr = [1, "asd", 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "number") {
    continue;
  }
  sum += arr[i];
  if (sum > 1000000) {
    break;
  }
}
for (const number of arr) {
  console.log("-->", number);
}

const kebabas = {
  lavasas: true,
  mesa: "jautiena",
  padazas: "cesnakinis",
  kaina: 4.99,
};

const kebabaskeys = Object.keys(kebabas);
console.log(kebabas);

// for of eina tik per arėjaus kiekvieną elementą
for (const key of kebabaskeys) {
  console.log("###", key, "--->", kebabas[key]);
}

// for in ciklas eina per objektą
for (const key in kebabas) {
  console.log("###", key, "--->", kebabas[key]);
}

const t1 = true ? 1 : 2;
const t2 = 1 < 2 ? 3 : 4;
console.log(t1);
console.log(t2);

function addicion(a, b) {
  return a + b;
}
console.log(addicion(7, 5));

const multi = (k, l) => k * l;
console.log(multi(7, 5));
