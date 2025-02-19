/**
 * Parašykite funkciją, kuri apskaičiuoja skaičiaus faktorialą.
 *
 * Pvz. faktorialas(5) -> 120
 */
console.log("        faktorialas");
function faktorialas(num) {
  let fak = num;
  for (let i = num; i > 1; i--) {
    fak = fak * (i - 1);
  }
  return fak;
}
console.log(faktorialas(5));

/**
 * Parašykite funkciją, kuri patikrina ar string'as yra palindromas.
 *
 * Pvz. arPalindromas("level") -> true, arPalindromas("hello") -> false
 */
console.log("        arPalindromas");
function arPalindromas(zodis) {
  zodisSplit = zodis.split("");
  if (zodis.split("").join("") === zodisSplit.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(arPalindromas("level"));
console.log(arPalindromas("hello"));

/**
 * Sukurkite funkciją, kuri priima masyvą skaičių ir grąžiną antrą didžiausią skaičių.
 *
 * Pvz. antrasDidziausias([10, 5, 8, 20]) -> 10
 */
console.log("        antrasDidziausias");

let antras = [];
function antrasDidziausias(mas) {
  mas.sort((a, b) => a - b);
  antras = mas.at(-2);
  return antras;
}

console.log(antrasDidziausias([10, 5, 8, 20]));

/**
 * Parašykite funkciją, kuri sugeneruoja atsitiktinį slaptažodį iš didžiųjų, mažųjų raidžių ir skaičių.
 *
 * Pvz. generuotiSlaptazodi(8) -> "aB3dE5kL"
 */
console.log("        generuotiSlaptazodi");
const galimiSimbol =
  "0123456789abcdefghijklmnoprstuvzABCDEFGHIJKLMNOPRSTUVZyYwW";
let slaptazodis = "";
let randomNumber = 0;
function generuotiSlaptazodi(ilgis) {
  for (let i = 0; i < ilgis; i++) {
    randomNumber = Math.floor(Math.random() * (galimiSimbol.length + 1));
    slaptazodis += galimiSimbol.charAt(randomNumber);
  }
  return slaptazodis;
}

console.log(generuotiSlaptazodi(8));

/**
 * Parašykite funkciją, kuri tikrina ar skaičius yra Fibonačio skaičius.
 * Seka prasideda šiais skaičiais: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377. Kiekvienas šios sekos skaičius lygus dviejų prieš jį einančių skaičių sumai.
 * Pvz. arFibonacio(8) → true, arFibonacio(10) → false
 */
let fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

console.log("        arFibonacio");

function arFibonacio(num) {
  for (let i = 0; i < num; i++) {
    if (fibo.includes(num)) {
      return true;
    } else if (num > fibo.at(-1)) {
      fibo.push(fibo.at(-1) + fibo.at(-2));
    } else {
      return false;
    }
  }
}

console.log(arFibonacio(8));
console.log(arFibonacio(10));
console.log(arFibonacio(832040));
console.log(arFibonacio(832050));

/**
 * Parašykite funkciją, kuri iš teksto pašalina visus skaičius.
 *
 * Pvz. beSkaiciu("Labas rytas, Lietuva 2025!") → "Labas rytas, Lietuva!"
 */
console.log("        beSkaiciu");

function beSkaiciu(text) {
  const skaiciai = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const textSplit = text.split("");
  const masyvasBeSkaiciu = [];
  const masyvasBeTarpu = [];
  for (let i = 0; i < textSplit.length; i++) {
    if (!skaiciai.includes(textSplit[i])) {
      masyvasBeSkaiciu.push(textSplit[i]);
    }
  }
  for (let i = 0; i < masyvasBeSkaiciu.length; i++) {
    if (masyvasBeSkaiciu[i] === " " && "!".includes(masyvasBeSkaiciu[i + 1])) {
      continue;
    }
    masyvasBeTarpu.push(masyvasBeSkaiciu[i]);
  }

  return masyvasBeTarpu.join("");
}
console.log(beSkaiciu("Labas rytas, Lietuva 2025!"));

/**
 * Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina visus unikalius skaičius (pašalina pasikartojančius).
 *
 * Pvz., unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]
 */

/**
 * Parašykite funkciją, kuri skaičiuoja, kiek kartų kiekviena raidė pasikartoja string‘e ir grąžina objektą.
 *
 * Pvz., skaiciuotiRaidesObj("banana") → { b: 1, a: 3, n: 2 }
 */

/**
 * Sukurkite funkciją, kuri patikrina, ar du string‘ai yra anagramos (turi tas pačias raides, tik kita tvarka).
 *
 * Pvz., arAnagrama("listen", "silent") → true, arAnagrama("hello", "world") → false
 */

/**
 * Raskite klaidą ir ištaisykite funkciją, kad ji pakeistų tiek didžiąsias, tiek mažąsias "a" į "@".
 */
console.log('        "a" į "@"');
const keistiRaide = (string) =>
  string.replaceAll("a", "@").replaceAll("A", "@");

console.log(keistiRaide("Banana"));
console.log(keistiRaide("Ananasas"));
