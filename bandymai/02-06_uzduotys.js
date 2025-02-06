/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", jei neigiamas arba nulis.
 */
function tru(num) {
  /* if (num > 0) {
    return "true";
  } else {
    return "false";
  }*/
  return num > 0;
}

console.log("\n  Pirma užduotis");
console.log(tru(5));
console.log(tru(0));
console.log(tru(-5));

/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */
function men(num) {
  if (num === 1) {
    return "Sausis";
  } else if (num === 2) {
    return "Vasaris";
  } else if (num === 3) {
    return "Kovas";
  } else if (num === 4) {
    return "Balandis";
  } else if (num === 5) {
    return "Gegužė";
  } else if (num === 6) {
    return "Birželis";
  } else if (num === 7) {
    return "Liepa";
  } else if (num === 8) {
    return "Rugpjūtis";
  } else if (num === 9) {
    return "Rugsėjis";
  } else if (num === 10) {
    return "Spalis";
  } else if (num === 11) {
    return "Lapkritis";
  } else if (num === 12) {
    return "Gruodis";
  } else {
    return "Tokios skaičiaus atitinkančio mėnesį nėra";
  }
}

console.log("\n  Antra užduotis");
console.log(men(2));
console.log(men(10));
console.log(men(12));

/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */

function bigger(x, y) {
  return x > y
    ? "Pirmas didesnis"
    : x < y
    ? "Antras didesnis"
    : "Skaičiai lygūs";
}

console.log("\n  Trečia užduotis");
console.log(bigger(2, 6));
console.log(bigger(10, 6));
console.log(bigger(10, 10));

/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 */

// Taigi, laipsnis Farenheito skalėje yra lygus 1/180 intervalo tarp vandens užšalimo ir užvirimo temperatūrų.
//pagal Celsijaus skalę vanduo verda 100 ° C, o užšalimo temperatūra yra 0 ° C, o pagal Fahrenheito skalę vanduo verda 212 ° F, o jo užšalimo temperatūra yra 32 ° F
// 0 =32 o tada +1.8 ciklas?
//Celsijaus, bet ne Farenheito laipsniu – jų tarpusavio ryšys yra 1 : 1,8 (arba 5 : 9).

function laipsniai(cel) {
  return (cel * 9) / 5 + 32;
}

console.log("\n  Ketvirta užduotis");
console.log(laipsniai(20), "°F");
console.log(laipsniai(100), "°F");
console.log(laipsniai(0), "°F");
console.log(laipsniai(-10), "°F");

/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname tą patį skaičių.
 */

/* function suma(num) {
  if (num < 10) {
    return num;
  } else {
    return num
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  }
}

console.log("\n  Penkta užduotis by GPT");
console.log(suma(5));
console.log(suma(53)); */

/* function skaiciuSuma(skaicius) {
  let suma = 0;
  skaicius = skaicius.toString();

  for (let i = 0; i < skaicius.length; i++) {
    suma += Number(skaicius[i]);
  }

  return suma;
}
console.log("\n  Penkta užduotis by Simas");
console.log(skaiciuSuma(23)); */

function suma(num) {
  let sum = 0;
  for (let i = 0; num / 10 > 0; i++) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("\n  Penkta užduotis by Mindaugas");
console.log(suma(13));

/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo 0 iki 100 (sveikasis skaičius).
 */
function belekas() {
  return Math.floor(Math.random() * 101);
}
/* for (let i = 0; i < 100; i++) {
  console.log(belekas()); 
}*/

console.log("\n  Šešta užduotis");
console.log(belekas(), "%");
console.log(belekas(), "%");
console.log(belekas(), "%");

/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos lentelės rezultatais iki 10.
 */

/* function daugyba(num) {
  return Array.from({ length: 10 }, (_, i) => (i + 1) * num);
} 
  console.log("\n  Bonus užduotis");
console.log(daugyba(5)); */

function lentele(num) {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr[i - 1] = num * i;
  }
  return arr;
}

console.log("\n  Bonus užduotis");
console.log(lentele(5));

const lentele2 = lentele(5);
lentele2.forEach((reiksme, indeksas) =>
  console.log(`Index ${indeksas}: ${reiksme}`)
);
