function demo(...params) {
  //  parametrų validavimas
  //  logika
  //  apskaičiuoto rezultato validavimas
  //  rezultato gražinimas
}

function tusciaFunkcija() {
  return false;
}
console.log(tusciaFunkcija());

function daugyba(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    const result = n1 * n2;
    return result;
  }
  return false;
}

console.log(daugyba(7, 5));
console.log(daugyba("Labas", 5));
console.log(daugyba());

function daugybaTvarkingai(n1, n2) {
  if (typeof n1 !== "number") {
    return "Error: pirmas įvestas parametras nėra skaičiaus tipo";
  }

  if (typeof n2 !== "number") {
    return "Error: antras įvestas parametras nėra skaičiaus tipo";
  }
  if (n1 === Infinity || n1 === -Infinity || "" + n1 === "NaN") {
    // skaičių paverti į tekstą su + tuščias stringas
    return "Error: pirmas įvestas parametras per didelis arba netinkamas";
  }

  if (n2 === Infinity || n2 === -Infinity || isNaN(n2)) {
    return "Error: antras įvestas parametras per didelis, arba netinkamas";
  }
  //   logika
  const result = n1 * n2;
  //   rezultato validavimas
  if (result >= Number.MAX_VALUE) {
    return " Error: rezultatas galimai viršyja maksimalią įsimenamą reikšmę ";
  }
  if (result >= Number.MAX_SAFE_INTEGER) {
    //maksimali JS įsimenama sveiko skaičiaus reikšmė
    return " Error: rezultatas galimai viršyja maksimalią įsimenamą reikšmę ";
  }

  // rezultato grazinimas
  return result;
}
console.log(daugybaTvarkingai(7, 5));
console.log(daugybaTvarkingai(7, Infinity));
console.log(daugybaTvarkingai("Labas", 5));
console.log(daugybaTvarkingai(NaN, 5));

/* Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

function skaitmenuKiekisSkaiciuje(kint) {
  if (
    typeof kint !== "number" ||
    kint === Infinity ||
    kint === -Infinity ||
    isNaN(kint)
  ) {
    return "Pateikta netinkamo tipo reikšmė";
  }

  let skaitmenuKiekis = 0;
  // const kintSplit = String(kint).split("");
  const kintSplit = ("" + kint).split("");

  for (let i = 0; i < kintSplit.length; i++) {
    skaitmenuKiekis += 1;
  }
  return skaitmenuKiekis;
}

console.log("\n     SkaitmenuKiekisSkaiciuje\n");
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(-Infinity));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(37060, 123456));
console.log(skaitmenuKiekisSkaiciuje(3.14));

/* Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
*/
console.log("\n         didziausiasSkaiciusSarase \n");

function didziausiasSkaiciusSarase(x) {
  if (!Array.isArray(x)) {
    return "Pateikta netinkamo tipo reikšmė";
  }

  if (x.length === 0) {
    return "Pateiktas sąrašas negali būti tuščias.";
  }
  let didziausiasSkaicius = -Infinity;
  for (let i = 0; i < x.length; i++) {
    if (x[i] > didziausiasSkaicius) {
      didziausiasSkaicius = x[i];
    }
  }
  if (didziausiasSkaicius === -Infinity) {
    return "sąraše nėra skaičių";
  }
  return didziausiasSkaicius;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase(NaN));
console.log(didziausiasSkaiciusSarase(["a"]));
console.log(didziausiasSkaiciusSarase([-5, 58, "a", 14, 0, 18]));

/* 
Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/
console.log("\n       isrinktiRaides \n");

function isrinktiRaides(tekstas, kasKelinta) {
  if (typeof tekstas !== "string") {
    return " Pirmasis kintamasis yra netinkamo tipo.";
  }
  if (!tekstas.length || tekstas.length > 100) {
    return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
  }
  if (typeof kasKelinta !== "number") {
    return "Antrasis kintamasis yra netinkamo tipo.";
  }
  if (kasKelinta <= 0) {
    return "Antrasis kintamasis turi būti didesnis už nulį.";
  }
  if (tekstas.length < kasKelinta) {
    return " Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
  }
  let isrinktosRaides = "";
  for (let i = kasKelinta - 1; i < tekstas.length; i = i + kasKelinta) {
    isrinktosRaides = isrinktosRaides + tekstas[i];
  }
  return isrinktosRaides;
}

console.log(isrinktiRaides("abcdefg", 2));
console.log(isrinktiRaides("bcdefghijk", 3));
console.log(isrinktiRaides("abc", 0));
console.log(isrinktiRaides("abc", 4));
console.log(isrinktiRaides(1561, 2));
console.log(isrinktiRaides("", 4));

/* 
Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/
console.log("\n      dalyba \n");
function dalyba(num1, num2) {
  if (
    typeof num1 !== "number" ||
    isNaN(num1) ||
    num1 === Infinity ||
    num1 === -Infinity
  ) {
    return "Neteisingai nurodyta pirmojo kintamojo reikšmė";
  }
  if (
    typeof num2 !== "number" ||
    isNaN(num2) ||
    num2 === Infinity ||
    num2 === -Infinity ||
    num2 === 0
  ) {
    return "Neteisingai nurodyta antrojo kintamojo reikšmė";
  }

  const padalinta = num1 / num2;
  return padalinta;
}
console.log(dalyba(25, 5));
console.log(dalyba(25, 0)); // dalyba iš nulio negalima
console.log(dalyba());
console.log(dalyba("abs", 5));
console.log(dalyba(true, 5));
console.log(dalyba(-25, 5));
console.log(dalyba(NaN, 5));
console.log(dalyba(-Infinity, 5));
