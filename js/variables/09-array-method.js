/* 
ARRAY - Arėjus. listas, masyvas, matrica
*/

const numbers = [10, 2, 8, 4, 6];
console.log(numbers);

console.log(numbers.length);

const mix = [145, "sdds", true];
console.log(mix);
console.log(mix.length);

const students = ["Jonas", "Maryte", "Petras", "Ona", "kazys", "Aldona"];
console.log(students);

console.log(students.length);

// Studentas: Jonas pradėjo mokytis.
// Studentas: Maryte pradėjo mokytis.
// Studentas: Petras pradėjo mokytis.
// Studentas: Ona pradėjo mokytis.

console.log(`Studentas: ${students[0]} pradėjo mokytis`);
console.log(`Studentas: ${students[1]} pradėjo mokytis`);
console.log(`Studentas: ${students[2]} pradėjo mokytis`);
console.log(`Studentas: ${students[3]} pradėjo mokytis`);

console.log("------");
for (let i = 0; i < students.length; i++) {
  console.log(i, `Studentas: ${students[i]} pradėjo mokytis`);
}

console.clear();

// Array tikrina pirmą apvalkala, jei [ tai arrėjjus]
const x = [45565];

if (Array.isArray(x)) {
  console.log("Taip");
} else {
  console.log("Ne");
}

console.log(Array.isArray(125));
console.log(Array.isArray(true));
console.log(Array.isArray([]));
console.log(Array.isArray([125]));
console.log(Array.isArray([true]));

const studentsAt = ["Jonas", "Maryte", "Petras", "Ona", "kazys", "Aldona"];

console.log(studentsAt[1]);
console.log(studentsAt[3]);
console.log(studentsAt[-1]);
console.log(studentsAt[studentsAt.length - 1]);

console.log(studentsAt.at(0));
console.log(studentsAt.at(-1));

console.log("------");

const studentsConcat1 = ["Jonas", "Maryte"];
const studentsConcat2 = ["Petras", "Ona"];
const studentsConcat111 = studentsConcat1.concat(studentsConcat2);

console.log(studentsConcat111);

const studentsConcat222 = studentsConcat2.concat(studentsConcat1);
console.log(studentsConcat222);

console.log(studentsConcat1 + studentsConcat2); // jungia tik kaip string

console.log([1].concat([2]).concat([3]).concat([4]));
console.log([1].concat([2], [3], [4]));

const notFlat = [1, 2, 3, [4], 4, [5, 6]];
console.log(notFlat);
console.log(notFlat[4]);
console.log(notFlat[3]);
console.log(notFlat[3][0]);
console.log(notFlat[5]);
console.log(notFlat[5][0]);
console.log(notFlat[5][1]);

console.log(notFlat.flat());
console.log(notFlat.flat(Infinity)); // ištrauks į pirmą levelį visus kad ir kiek [[[[[[x]]]]]

console.clear();

const studentsInc = [
  "Jonas",
  "Ona",
  "Maryte",
  "Petras",
  "Ona",
  "kazys",
  "Aldona",
];
console.log(studentsInc.includes("Ona"));
console.log(studentsInc.includes("ona"));
console.log(studentsInc.includes("a"));

const studentsIndex = [
  "Jonas",
  "Ona",
  "Maryte",
  "Petras",
  "Ona",
  "kazys",
  "Aldona",
];
console.log(studentsIndex.indexOf("ona"));
console.log(studentsIndex.indexOf("a"));
console.log(studentsIndex.indexOf("Ona"));
console.log(studentsIndex.indexOf("Ona", 3));

let onaCount = 0;

for (let i = 0; i < studentsIndex.length; i++) {
  if (studentsIndex[i] === "Ona") {
    onaCount++;
  }
}
console.log('Sarase yra "Ona":', onaCount);

// daugiau studentų

const searchStudent = "Maryte";
let studentCount = 0;

for (let i = 0; i < studentsIndex.length; i++) {
  if (studentsIndex[i] === searchStudent) {
    studentCount++;
  }
}

if (studentCount === 0) {
  console.log("Norimo studento nerasta");
} else {
  console.log(`Sarase yra "${searchStudent}":${studentCount}`);
}
