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
      marks: [10, 6, 8, 5, 6, 5, 2],
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

//   parašyti funkciją kuri skaičiuotų pažymių vidurkį Marytės ir tėvų

const marija = maryte.parents[1].name;
const marijaIlgis = maryte.parents[1].marks.length;
const marijaMarks = maryte.parents[1].marks;

const juozapas = maryte.parents[0].name;
const juozapasIlgis = maryte.parents[0].marks.length;
const juozapasMarks = maryte.parents[0].marks;

const maryte1 = maryte.name;
const maryteIlgis = maryte.marks.length;
const maryteMarks = maryte.marks;

let marksTotalSum = 0;
let MarksAverage = 0;

function vidurkis(ilgis, marks) {
  let marksTotalSum = 0;
  for (let i = 0; i < ilgis; i++) {
    marksTotalSum += marks[i];
  }
  MarksAverage = marksTotalSum / ilgis;
  return MarksAverage;
}

console.log(
  `${marija} pazymiu vidurkis, ${vidurkis(marijaIlgis, marijaMarks)} `
);
console.log(
  `${juozapas} pazymiu vidurkis, ${vidurkis(juozapasIlgis, juozapasMarks)} `
);
console.log(
  `${maryte1} pazymiu vidurkis, ${vidurkis(maryteIlgis, maryteMarks)} `
);

const school = {
  name: "Baltijos Technologijų Institutas",
  classes: [
    {
      name: "1A",
      students: [
        { name: "Jonas", grades: [8, 7, 9, 10] },
        { name: "Ieva", grades: [6, 5, 8, 7] },
        { name: "Mantas", grades: [9, 10, 8, 9] },
      ],
    },
    {
      name: "1B",
      students: [
        { name: "Aistė", grades: [5, 6, 7, 8] },
        { name: "Dovydas", grades: [6, 7, 5, 6] },
        { name: "Tomas", grades: [8, 9, 10, 10] },
      ],
    },
    {
      name: "1C",
      students: [
        { name: "Lukas", grades: [9, 9, 10, 10] },
        { name: "Monika", grades: [7, 8, 6, 7] },
        { name: "Karolis", grades: [8, 7, 9, 10] },
      ],
    },
  ],
};

/**
 * 1. Parašykite funkciją calculateClassAverage(classObj), kuri priims klasės objektą ir grąžins jos vidutinį pažymį.
 */
const pirmaA = school.classes[0].name;
const pazymiaiA = school.classes[0].students[0].grades;
const pazymiaiA1 = school.classes[0].students[1].grades;
const pazymiaiA2 = school.classes[0].students[2].grades;

const pazymiaiALength = school.classes[0].students[0].grades.length;
const pazymiaiALength1 = school.classes[0].students[1].grades.length;
const pazymiaiALength2 = school.classes[0].students[2].grades.length;

let skaiciuSuma = 0;
let vidurkisKlases = 0;

function calculateClassAverage(classObj) {
  for (let i = 0; i < pazymiaiALength; i++) {
    skaiciuSuma += pazymiaiA[i];
  }
  for (let i = 0; i < pazymiaiALength1; i++) {
    skaiciuSuma += pazymiaiA1[i];
  }
  for (let i = 0; i < pazymiaiALength2; i++) {
    skaiciuSuma += pazymiaiA2[i];
  }
  vidurkisKlases =
    skaiciuSuma / (pazymiaiALength + pazymiaiALength1 + pazymiaiALength2);
  return vidurkisKlases;
}
console.log(`${pirmaA} klasės vidurkis ${calculateClassAverage(pirmaA)}`);

const pirmaB = school.classes[1];
const pirmaBName = school.classes[1].name;

const pazymiaiB = school.classes[1].students[0].grades;
const pazymiaiB1 = school.classes[1].students[1].grades;
const pazymiaiB2 = school.classes[1].students[2].grades;

const pazymiaiBLength = school.classes[1].students[0].grades.length;
const pazymiaiBLength1 = school.classes[1].students[1].grades.length;
const pazymiaiBLength2 = school.classes[1].students[2].grades.length;

let skaiciuSumaB = 0;
let vidurkisBKlases = 0;

function calculateClassAverage2(classObj) {
  for (let i = 0; i < pazymiaiBLength; i++) {
    skaiciuSumaB += pazymiaiB[i];
  }
  for (let i = 0; i < pazymiaiBLength1; i++) {
    skaiciuSumaB += pazymiaiB1[i];
  }
  for (let i = 0; i < pazymiaiBLength2; i++) {
    skaiciuSumaB += pazymiaiB2[i];
  }
  vidurkisBKlases =
    skaiciuSumaB / (pazymiaiBLength + pazymiaiBLength1 + pazymiaiBLength2);
  return vidurkisBKlases;
}
console.log(`${pirmaBName} klasės vidurkis ${calculateClassAverage2(pirmaB)}`);

/**
 * 2. Parašykite funkciją calculateSchoolAverages(schoolObj), kuri apskaičiuos visų mokyklos klasių vidurkius ir grąžins juos masyve.
 */

/**
 * 3. Išrikiuokite klases pagal vidurkį (nuo didžiausio iki mažiausio) ir išveskite jas į konsolę formatu:
 * 1C - 8.5
 * 1A - 8.0
 * 1B - 6.5
 */
