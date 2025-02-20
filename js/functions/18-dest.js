/*
Destruktūrizavimas
Struktūrizavimas
*/

const numbers = [10, 2, 8, 4, 6];

const n1 = numbers[0];
const n2 = numbers[1];
const nRest = [numbers[2], numbers[3], numbers[4]];
const nRest2 = numbers.slice(2);

console.log(n1);
console.log(n2);
console.log(nRest);
console.log(nRest2);

const [m1, m2, m3] = numbers;
console.log(m1, m2, m3);

const [k1, , , k3] = numbers;
console.log(k1, k3);

const [l1, l2, ...l] = numbers; // ... vadinamas Rest operatoriumi
console.log(l1, l2, l);

const [...r] = numbers;
console.log(r);

r[0] = 100;
console.log(r);
console.log(numbers);

const t = [...numbers]; // Spread operatorius gali sukurti naują masyvą kad neiškraipytų originalo
console.log(t);

const person = {
  name: "Jonas",
  age: 99,
  isMaried: true,
  marks: [10, 2, 8, 4, 6],
  phone: 8612514315,
  address: {
    city: "Miestas",
    street: "gatve",
    number: 9,
  },
};

const name = person.name;
const age = person.age;
const isMaried = person.isMaried;
const personRest = {
  city: "Miestas",
  street: "gatve",
  number: 9,
};

console.log(name);
console.log(age);
console.log(isMaried);
console.log(personRest);
