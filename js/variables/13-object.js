// object -> array -> string

/*
const luckyNumbersObject = {
  0: 10,
  1: 2,
  2: 8,
  3: 4,
  4: 6,
};

const luckyNumbersArray = [10, 2, 8, 4, 6];
*/

const jonas = {
  name: "Jonas",
  age: 99,
  isMaried: true,
  marks: [10, 2, 8, 4, 6],
};

// object -> array -> string
// obekto raktai visada interpretuojami kaip tekstas
// objekta po kiekvienos eilutes reikia dėti kablelį (kad keisti eilutes ir dėl GitHub, kad jam neriektų trinti eilutės dėl kablelio nebuvimo)
console.log(jonas);

console.log(jonas.name);
console.log(jonas.age);
console.log(jonas.isMaried);

console.log(jonas["name"]);
console.log(jonas["age"]);
console.log(jonas["isMaried"]);

const luckyNumbersObject = {
  0: 10,
  1: 2,
  2: 8,
  3: 4,
  4: 6,
};

console.log(luckyNumbersObject);
console.log(luckyNumbersObject["0"], luckyNumbersObject[0]);
console.log(luckyNumbersObject["1"], luckyNumbersObject[1]);
console.log(luckyNumbersObject["2"], luckyNumbersObject[2]);

const crazy = {
  title: "pavadinimas....",
  7: "septyni",
  isMaried: true,
  "atskiri zodziai": "daug atskiru zodziu",
  new: "Kazkas naujo",
};

console.log(crazy);
console.log(crazy.title);
console.log(crazy["title"]);
console.log(crazy["7"]);
console.log(crazy[7]);
console.log(crazy.isMaried);
console.log(crazy["isMaried"]);
console.log(crazy["atskiri zodziai"]);

console.clear();

const maryte = {
  name: "Maryte",
  age: 88,
  isMaried: false,
  marks: [10, 2, 8, 4, 6],
  parents: [
    {
      name: "Juozapas",
      age: 112,
      isMaried: true,
      phone: 861475214,
      marks: [10, 9, 8, 7, 6, 5, 4],
    },
    {
      name: "Marija",
      age: 110,
      isMaried: true,
      phone: 861475214,
      marks: [10, 8, 9, 8, 5, 5, 4],
    },
  ],
};
console.log(maryte);

const marksCount = maryte.marks.length;
let marksTotalSum = 0;

for (let i = 0; i < marksCount; i++) {
  marksTotalSum += maryte.marks[i];
}

const maryteMarksAverage = marksTotalSum / marksCount;

console.log("Marytes pazymiu suma", marksTotalSum);
console.log("Pazymiu kiekis", marksCount);
console.log("Marytes pazymiu vidurkis", maryteMarksAverage);

console.clear();

console.log(maryte.parents.length);

console.log(maryte.parents[0].name);
console.log(maryte.parents[1].name);

for (let i = 0; i < maryte.parents.length; i++) {
  const parent = maryte.parents[i];

  console.log(parent.name);
  console.log(parent.age);
  console.log(parent.isMaried);
}

/*

You can define the object attributes during initialization, like this:

let animal = {name: "dog"}
you can also set/get some properties after the object definition, like this:

let animal = {}
animal.name = "dog"
// or:
animal["name"] = "dog"

*/
