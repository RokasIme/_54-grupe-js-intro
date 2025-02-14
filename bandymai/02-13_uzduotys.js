// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
console.log("         Užduotis 1");

const numbers1 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
  sum += numbers1[i];
}
console.log(sum);

// Sprendimas su array metodu (reduce):
// Jūsų kodas čia...

console.log(numbers1.reduce((sum, i) => sum + i, 0) + " - Reduce");

// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
console.log("         Užduotis 2");

const numbers2 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let lyginiai = [];
let kiekis = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    lyginiai = lyginiai + numbers2[i] + " ";
    kiekis = kiekis + 1;
  }
}
console.log("Lyginių skaičių kiekis", kiekis, "jie yra:", lyginiai);

// Sprendimas su filter metodu:
// Jūsų kodas čia...
console.log(
  " Lyginių kiekis - " +
    numbers2.filter((num) => num % 2 === 0).length +
    "  - Filter metodas"
);

// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
console.log("         Užduotis 3");

const numbers3 = [10, 5, 20, 8, 15];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

let biggest = numbers3[0];

for (i = 0; i < numbers3.length; i++) {
  if (numbers3[i] > biggest) {
    biggest = numbers3[i];
  }
}

console.log(biggest, "for");

// Sprendimas su Math.max ir spread operator:
// Jūsų kodas čia...
console.log(Math.max(...numbers3), "Math.Max ir spread");

// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
console.log("         Užduotis 4");

const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;

// Sprendimas su for ciklu:
// Jūsų kodas čia...

let kartotinis = 0;
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] === target) {
    kartotinis++;
  }
}
console.log(kartotinis);

// Sprendimas su filter metodu:
// Jūsų kodas čia...
console.log("filter kai išmoksiu");

// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
console.log("         Užduotis 5");

const numbers5 = [-3, 0, 5, -1, 8, -2];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let teigiami = [];
for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] > 0) {
    teigiami.push(numbers5[i]);
  }
}
console.log(teigiami);

// Sprendimas su filter metodu:
// Jūsų kodas čia...
console.log("filter kai išmoksiu");

// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
console.log("         Užduotis 6");

const numbers6 = [1, 2, 3, 4];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let sandauga = 1;
for (let i = 0; i < numbers6.length; i++) {
  sandauga = numbers6[i] * sandauga;
}
console.log(sandauga);
// Sprendimas su reduce metodu:
// Jūsų kodas čia...
console.log(numbers6.reduce((sum, i) => sum * i, 1) + " - reduce");

// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
console.log("         Užduotis 7");

const array7 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let apverstas = [];
for (let i = 0; i < array7.length; i++) {
  apverstas.unshift(array7[i]);
}
console.log(apverstas);
// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...
console.log(array7.reverse([]));

// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
console.log("         Užduotis 8");

const array8 = ["a", "b", "c", "d"];
const searchElement = "c";

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let index = "-1";

for (let i = 0; i < array8.length; i++) {
  if (searchElement === array8[i]) {
    index = i;
  }
}

console.log([index]);

// Sprendimas su indexOf metodu:
// Jūsų kodas čia...
console.log([array8.indexOf(searchElement)]);

// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
console.log("         Užduotis 9");

const array9 = [1, 3, 5, 7, 9];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let dideja = 0;
let nelygu = 0;
for (let i = 0; i < array9.length; i++) {
  if (array9[i] > dideja) {
    dideja = array9[i];
  } else {
    nelygu = nelygu + 1;
  }
}
if (nelygu > 0) {
  console.log("skaičiai nėra surikiuoti didėjimo tvarka");
} else {
  console.log("skaičiai surikiuoti didėjimo tvarka");
}

// by Simas
const array9_for = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }

  return true;
};
console.log(`Sprendimas su for ciklu: ${array9_for(array9)} - by Simas`);

// Sprendimas su every metodu:
// Jūsų kodas čia...
const array9_every = (a) => {
  return a.every((num, i) => i === 0 || num >= a[i - 1]);
};
console.log(`${array9_every(array9)} every`);

// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
console.log("         Užduotis 10");

const numbers10 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

const numbers10For = (a) => {
  const naujasMas = [];
  for (let i = 0; i < a.length; i++) {
    naujasMas.push(a[i] * a[i]);
  }
  return naujasMas;
};
console.log(numbers10For(numbers10));
// Sprendimas su map metodu:
// Jūsų kodas čia...
const numbers10Map = numbers10.map((a) => a * a);

console.log(numbers10Map + " - Map");

// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
console.log("         Užduotis 11");

const numbers11 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers11For = (a) => {
  let sumaNelyginiu = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      sumaNelyginiu += a[i];
    }
  }
  return sumaNelyginiu;
};
console.log(numbers11For(numbers11));

// Sprendimas su filter ir reduce:
// Jūsų kodas čia...

const num11Filter = (a) => {
  return a.filter((num) => num % 2 !== 0).reduce((i, b) => i + b, 0);
};
console.log(num11Filter(numbers11) + " - Filter ir Reduce");

// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
console.log("         Užduotis 12");

const numbers12 = [10, 20, 30, 40, 50];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers12For = (a) => {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return (sum / a.length).toFixed(2);
};

console.log(numbers12For(numbers12));
// Sprendimas su reduce:
// Jūsų kodas čia...
const numbers12Reduce = (a) => {
  return (a.reduce((sum, num) => sum + num) / a.length).toFixed(2);
};

console.log(numbers12Reduce(numbers12), "- Reduce");

// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
console.log("         Užduotis 13");

const numbers13 = [1, 2, 3, 2, 4, 3, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers13For = (a) => {
  const naujasArr = [];
  for (let i = 0; i < a.length; i++) {
    if (!naujasArr.includes(a[i])) {
      naujasArr.push(a[i]);
    }
  }
  return naujasArr;
};
console.log(numbers13For(numbers13));

// Sprendimas su Set:
// Jūsų kodas čia...
const numbers13Set = (a) => {
  return [...new Set(a)];
};
console.log(`${numbers13Set(numbers13)} - Set`);

// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
console.log("         Užduotis 14");

const numbers14 = [5, 3, 9, 1, 7];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...

// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
console.log("         Užduotis 15");

const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su filter:
// Jūsų kodas čia...

// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
console.log("         Užduotis 16");

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su concat metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
console.log("         Užduotis 17");

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su flat metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
console.log("         Užduotis 18");

const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su filter:
// Jūsų kodas čia...

// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
console.log("         Užduotis 19");

const numbers19 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce:
// Jūsų kodas čia...

// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
console.log("         Užduotis 20");

const numbers20 = [1, 2, 3, 4];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce:
// Jūsų kodas čia...
