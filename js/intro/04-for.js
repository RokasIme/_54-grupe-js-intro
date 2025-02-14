/* 
FOR "tevinis" ciklas
ciklas (cikliskumas)-kazkas kartojasi;
- gali buti ribotas kiekis kartu
- gali buti neribotas kiekis kartu
*/
console.log("START");

for (let i = 0; i < 4; i = i + 1) {
  // pirma skaičius reikšmė, antras sąlyga, trečias darbas kuris vis atliekamas kai atininka anta sąlyga.
  console.log(i, "Labas rytas, Lietuva");
}

console.log("Finish");

// By Agnė Kalinauskienė (mentorė)

//   for (iniciacijavimas; Sąlyga; VeiksmasPoIteracijos) {
//     statment;
//    }

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log("-------");

for (let i = 0; i < 5; i += 2) {
  console.log(i + 1);
}
console.log("-------");

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log("-------");

let sum1 = 0;
let MaxSk = 100;
for (let i = 0; i <= MaxSk; i++) {
  sum1 += i;
}

console.log(sum1);

let skaiciai = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let lyginiai = [];
let nelyginiai = [];

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] % 2 != 1) {
    lyginiai.push(skaiciai[i]);
  } else {
    nelyginiai.push(skaiciai[i]);
  }
}
console.log(lyginiai);
console.log(nelyginiai);

/* 4. Recepto ingredientų sąrašas */

console.log("\n4. Recepto ingredientų sąrašas\n");
const ingredientai = ["cukrus", "miltai", "kiaušiniai", "pienas", "sviestas"];
for (let i = 0; i < ingredientai.length; i++) {
  console.log(`${i + 1}. ${ingredientai[i]}`);
}

/* 6. Temperatūros patikra ar vir6ija ar ne 30 laipsnių*/
console.log("\n6. Temperatūros patikra");
const temperaturos = [22, 32, 28, 31, 29, 27, 30];

// Diena 1. (pirmadienis) Temperatūra neviršyja 30 laipsnių
// Diena 2. (antradeinis) Temperatūra viršyja 30 laipsnių

const savaitesDienos = [
  "Pirmadienis",
  "Antradienis",
  "Trečiadienis",
  "Ketvirtadienis",
  "Penktadienis",
  "Šeštadienis",
  "Sekmadienis",
];
for (let i = 0; i < temperaturos.length; i++) {
  if (temperaturos[i] <= 30) {
    console.log(` ${savaitesDienos[i]}. Temperatūra neviršyja 30 laipsnių`);
  } else {
    console.log(` ${savaitesDienos[i]}. Temperatūra viršyja 30 laipsnių`);
  }
}

/* 7. Studentų pažymių vidurkis */
console.log("\n7. Studentų pažymių vidurkis");
const pazymiai = [8, 9, 7, 10, 6];
let vidurkis = 0;

for (let i = 0; i < pazymiai.length; i++) {
  vidurkis = vidurkis + pazymiai[i];
}
vidurkis = vidurkis / pazymiai.length;
console.log(`Studentų pažymių vidurkis - ${vidurkis}`);
