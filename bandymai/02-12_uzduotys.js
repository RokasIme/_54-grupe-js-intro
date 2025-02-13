// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
// (Pvz., kvadratu(4) turi grąžinti 16.)

function kvadratas(num) {
  return (num = num * num);
}

console.log("     Pirma");
console.log(kvadratas(4));

// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)

function arlLyginis(num1) {
  if (num1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("     Antra");
console.log(arlLyginis(8));
console.log(arlLyginis(7));

// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)

function didesnisSkaicius(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log("     Trečia");
console.log(didesnisSkaicius(5, 8));

// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)

const ava = "JavaScript";
function reverseString(ava) {
  return ava.split("").reverse().join("");
}

console.log("     Ketvirta");
console.log(reverseString(ava));

// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)

let countA = 0;
//const word = "banana";

function skaiciuotiRaides(a, b) {
  for (i = 0; i < a.length; i++) {
    if (a[i] === "a") {
      countA++;
    }
  }
  return countA;
}

console.log("     Penkta");
//console.log(countA);
console.log(skaiciuotiRaides("banana", "a"));

// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" arba "nulis" naudojant ternary.
function teigiamas(a) {
  return a > 0 ? "teigiamas" : a < 0 ? "neigiamas" : "nulis";
}

console.log("     Šešta");
console.log(teigiamas(2));
console.log(teigiamas(-2));
console.log(teigiamas(0));

// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji ar mažoji).
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.)

function prasidedaA(zodis1) {
  return zodis1.toLowerCase().charAt(0) === "a";
}

console.log("     Septinta");
console.log(prasidedaA("Automobilis"));
console.log(prasidedaA("namas"));

// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5(grąžina true arba false).
function dalus(a) {
  return a % 3 === 0 && a % 5 === 0 ? true : false;
}

console.log("     Aštunta");
console.log(dalus(15));
console.log(dalus(5));

// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.

console.log("     Devinta");

for (i = 10; i > 0; i--) {
  console.log(i);
}

// 10. Parašykite for ciklą, kuris išveda tik lyginius skaičius nuo 2 iki 20.

console.log("     Dešimta");
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 11. Naudodami for ciklą, suskaičiuokite visų skaičių nuo 1 iki 100 sumą ir grąžinkite rezultatą.
let rezul = 0;
for (i = 1; i <= 100; i++) {
  rezul = rezul + i;
}

console.log("     Vienuolikta");
console.log(rezul);

// 12. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina jų vidurkį.
// (Pvz., vidurkis([5, 10, 15]) → 10.)

let average = 0;
function vidurkis(a) {
  for (i = 0; i < a.length; i++) {
    average = average + a[i];
  }
  return average / a.length;
}
console.log("     Dvylikta");
console.log(vidurkis([5, 10, 15]));

// 13. Naudodami for ciklą, raskite didžiausią skaičių iš pateikto masyvo.
// (Pvz., rastiDidziausia([3, 9, 2, 11, 7]) → 11.)

let biggest = 0;
const rastiDidziausia = [3, 9, 2, 11, 7];
for (i = 0; i < rastiDidziausia.length; i++) {
  if (rastiDidziausia[i] > biggest) {
    biggest = rastiDidziausia[i];
  }
}

console.log("     Trylikta");
console.log(biggest);

// 14. Sukurkite funkciją, kuri priima stringą ir grąžina jį be tarpų.
// (Pvz., beTarpų("Labas pasauli") → "Labaspasauli".)

function beTarpu(a) {
  a = a.replaceAll(" ", "");

  return a;
}

console.log("     Keturiolikta");
console.log(beTarpu("Labas pasauli"));

// 15. Parašykite funkciją, kuri patikrina, ar string'e yra daugiau nei 10 simbolių.
// (Pvz., arIlgas("JavaScript") → true, arIlgas("Labas") → false.)

function arIlgas(a) {
  if (a.length >= 10) {
    return true;
  } else {
    return false;
  }
}

console.log("     Penkiolikta");
console.log(arIlgas("JavaScript"));
console.log(arIlgas("Labas"));

// 16. Sukurkite for ciklą, kuris išveda daugybos lentelę 5(nuo 1 iki 10).
console.log("     Šešiolikta");

let sandauga = 0;
for (let i = 1; i <= 10; i++) {
  sandauga = 5 * [i];
  console.log("5 x " + [i] + ` = ${sandauga}`);
}

// 17. Parašykite funkciją, kuri priima stringą ir pakeičia visas "a" raides į "@".
// (Pvz., keistiRaide("banana") → "b@n@n@".)
const b = "banana";
function keistiRaide(a) {
  return a.replaceAll("a", "@");
}

console.log("     Septyniolikta");
console.log(keistiRaide("banana"));

// 18. Sukurkite funkciją, kuri sugeneruoja stringą "**********"(10 žvaigždučių), naudojant for ciklą.
console.log("     Aštuoniolikta");

function stringZvaigzde(a) {
  for (let i = 0; i < 10; i++) {
    a += "*";
  }
  return a;
}
console.log(stringZvaigzde(""));

// 19. Parašykite funkciją, kuri priima skaičių ir grąžina visus jo daliklius(išskyrus 1 ir patį save).
// (Pvz., dalikliai(12) →[2, 3, 4, 6].)
console.log("     Devyiolikta");

let dalikliuEile = [];

function dalikliai(a) {
  for (i = 2; i < a; i++) {
    if (a % i === 0) {
      dalikliuEile = dalikliuEile.concat(i);
    }
  }
  return dalikliuEile;
}
console.log(dalikliai(12));

// 20. Sukurkite funkciją, kuri tikrina, ar pateiktas skaičius yra pirminis.
// (Pvz., arPirminis(7) → true, arPirminis(8) → false.)

let eile = 0;

function arPirminis(a) {
  for (i = 2; i < a; i++) {
    if (a % i === 0) {
      eile += i;
    }
  }
  return eile === 0;
}

console.log("     Dvidešimta");
console.log(arPirminis(7));
console.log(arPirminis(8));

// Antras variantas pirminio pagrindinis

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.clear();
