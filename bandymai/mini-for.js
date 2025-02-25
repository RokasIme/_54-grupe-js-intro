/* Ciklo for panaudojimas
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30
*/

function skaiciuSuma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Netinkamas skaičiaus tipas";
  }
  if (!isFinite(a) || !isFinite(b)) {
    return "Netinkama skaičiaus tipo reikšmė";
  }

  if (a <= b) {
    let sum = 0;
    for (let i = a - (a % 1); i <= b; i++) {
      sum += i;
    }
    return sum;
  }
  if (a > b) {
    let sum = 0;
    for (let i = b - (b % 1); i <= a; i++) {
      sum += i;
    }
    return sum;
  }
}
console.log("       Skaičių suma");
console.log(skaiciuSuma(0, 0));
console.log(skaiciuSuma(0, 4));
console.log(skaiciuSuma(4, 0));
console.log(skaiciuSuma(0, 100));
console.log(skaiciuSuma(574, 815));
console.log(skaiciuSuma(-50, 50));
console.log(skaiciuSuma(-70, 30));
console.log(skaiciuSuma(70, -30));
console.log(skaiciuSuma(3.14, 25.46));
console.log(skaiciuSuma(-3.14, 25.46));
console.log(skaiciuSuma(Infinity, 25));
console.log(skaiciuSuma(NaN, 25));

// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”
console.log("       Iš kito galo");

function stringReverse(string) {
  if (string === string.split("").reverse().join("")) {
    return string;
  }

  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
}

console.log(stringReverse("abcdef"), "--> fedcda");
console.log(stringReverse("true"), "--> eurt");
console.log(stringReverse("sėdėk užu kėdės"));
console.log(stringReverse("123"));

/* Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/
console.log("       Dalijasi be liekanos");

function dalijasiBeLiekanos(num1, num2, d) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Netinkamas skaičiaus tipas";
  }
  if (!isFinite(num1) || !isFinite(num2)) {
    return "Netinkama skaičiaus tipo reikšmė";
  }
  const n1 = num1 < num2 ? num1 : num2;
  const n2 = num2 > num1 ? num2 : num1;

  let counter = 0;

  for (let i = n1 - (n1 % 1); i < n2; i++) {
    if (i % d === 0) {
      counter++;
    }
  }
  return counter;
}
console.log(dalijasiBeLiekanos(0, 11, 3, "--> 4"));
console.log(dalijasiBeLiekanos(0, 11, 5, "--> 3"));
console.log(dalijasiBeLiekanos(0, 11, 7, "--> 2"));
console.log(dalijasiBeLiekanos(5.5, 20, 2, "--> 2"));
