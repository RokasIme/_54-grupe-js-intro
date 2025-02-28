function isrinktiRaides(text, step) {
  if (arguments.length !== 2) {
    return "Netinkamas parametrų kiekis";
  }

  if (typeof text !== "string") {
    return "Pirmas kintamasis netinkamo tipo";
  }
  if (typeof step !== "number") {
    return "Antras kintamasis netinkamo tipo";
  }
  if (text === "") {
    return "Pirmasis kintamasis turi būti ne tuščias tekstas";
  }
  if (step === 0) {
    return "Antras kintamasis turi būti didesnis už nulį";
  }
  if (!Number.isInteger(step)) {
    return "Antras kintamasis turi būti normalus skaičius";
  }
  if (text.length < Math.abs(step)) {
    return "Antras kintamasis turi būti ne didesnis už patiekto teksto ilgį";
  }

  let result = "";
  if (step > 0) {
    for (let i = step - 1; i < text.length; i += step) {
      if (i % step === step - 1) {
        result += text[i];
      }
    }
  } else {
    for (let i = text.length + step; i >= 0; i += step) {
      result += text[i];
    }
  }
  return result;
}
// normalūs testai
console.assert(isrinktiRaides("abcdefg", 2) === "bdf", "Step: 2");
console.assert(isrinktiRaides("abcdefghijkl", 3) === "cfil", "Step: 3");

// normalūs testai neigiamos reikšmės

console.assert(isrinktiRaides("abcdefg", -2) === "fdb", " step -2");

// Nelogiškos reikšmės
console.assert(
  isrinktiRaides("", 2) === "Pirmasis kintamasis turi būti ne tuščias tekstas",
  "tuščias tekstas"
);

console.assert(
  isrinktiRaides("abc", 0) === "Antras kintamasis turi būti didesnis už nulį",
  "Step: 4"
);

console.assert(
  isrinktiRaides("abc", 4) ===
    "Antras kintamasis turi būti ne didesnis už patiekto teksto ilgį",
  "Step: 5"
);

console.assert(
  isrinktiRaides("abc", Infinity) ===
    "Antras kintamasis turi būti normalus skaičius",
  " Begalinis žingsnis"
);
console.assert(
  isrinktiRaides("abc", -Infinity) ===
    "Antras kintamasis turi būti normalus skaičius",
  "- Begalinis žingsnis"
);

console.assert(
  isrinktiRaides("abc", NaN) ===
    "Antras kintamasis turi būti normalus skaičius",
  " NaN žingsnis"
);

console.assert(
  isrinktiRaides() === "Netinkamas parametrų kiekis",
  "nėra parametrų"
);
console.assert(
  isrinktiRaides("abc") === "Netinkamas parametrų kiekis",
  "Yra tik vienas parametrų"
);
console.assert(
  isrinktiRaides(1, 2, 3, 4) === "Netinkamas parametrų kiekis",
  "per daug parametrų"
);

// netinkami duomenų tipai (pirmas parametras)
console.assert(
  isrinktiRaides(1561, 2) === "Pirmas kintamasis netinkamo tipo",
  "Step: 6"
);
console.assert(
  isrinktiRaides(true, 4) === "Pirmas kintamasis netinkamo tipo",
  "step: 7"
);
console.assert(
  isrinktiRaides({}, 4) === "Pirmas kintamasis netinkamo tipo",
  "step: 7"
);
console.assert(
  isrinktiRaides([], 4) === "Pirmas kintamasis netinkamo tipo",
  "step: 7"
);
console.assert(
  isrinktiRaides(null, 4) === "Pirmas kintamasis netinkamo tipo",
  "step: 7"
);
console.assert(
  isrinktiRaides(Infinity, 4) === "Pirmas kintamasis netinkamo tipo",
  "step: 7"
);
console.assert(
  isrinktiRaides(-Infinity, 4) === "Pirmas kintamasis netinkamo tipo",
  "step: 7"
);
console.assert(
  isrinktiRaides(undefined, 4) === "Pirmas kintamasis netinkamo tipo",
  "step: 7"
);

// netinkami duomenų tipai (antras parametras)

console.assert(
  isrinktiRaides(2, "1561") === "Pirmas kintamasis netinkamo tipo",
  "antras string"
);
console.assert(
  isrinktiRaides(4, true) === "Pirmas kintamasis netinkamo tipo",
  "true antras"
);
console.assert(
  isrinktiRaides(4, {}) === "Pirmas kintamasis netinkamo tipo",
  "object antras"
);
console.assert(
  isrinktiRaides(4, []) === "Pirmas kintamasis netinkamo tipo",
  "array antras"
);
console.assert(
  isrinktiRaides(4, null) === "Pirmas kintamasis netinkamo tipo",
  "null antras"
);
console.assert(
  isrinktiRaides(4, Infinity) === "Pirmas kintamasis netinkamo tipo",
  "Infinity antras"
);
console.assert(
  isrinktiRaides(4, -Infinity) === "Pirmas kintamasis netinkamo tipo",
  "- Infinity antras"
);
console.assert(
  isrinktiRaides(4, undefined) === "Pirmas kintamasis netinkamo tipo",
  "undefined antras"
);
console.assert(isrinktiRaides(4, 3.14) === "Pirmas kintamasis netinkamo tipo");
console.assert(isrinktiRaides(4, -3.14) === "Pirmas kintamasis netinkamo tipo");
