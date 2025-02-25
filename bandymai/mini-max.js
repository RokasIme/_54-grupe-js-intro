console.assert(1 === 1, "Vienetai nelygus"); // nespausdina nieko, jei sąlygos netenkins, spausdins
console.assert(2 === 1, "Labas", "rytas", "Lietuva");

function didziausiasSkaiciusSarase(list) {
  if (!Array.isArray(list)) {
    return "Pateikta netinkamo tipo reikšmė.";
  }

  return 0;
}

// Tikriname netinkamus duomenų tipus
{
  console.assert(
    didziausiasSkaiciusSarase("pomidoras") ===
      "Pateikta netinkamo tipo reikšmė.",
    "Netinkamo tipas: string"
  );
  console.assert(
    didziausiasSkaiciusSarase(215462) === "Pateikta netinkamo tipo reikšmė.",
    "Netinkamo tipas: number"
  );
  console.assert(
    didziausiasSkaiciusSarase(true) === "Pateikta netinkamo tipo reikšmė.",
    "Netinkamo tipas: boolean"
  );
  console.assert(
    didziausiasSkaiciusSarase(null) === "Pateikta netinkamo tipo reikšmė.",
    "Netinkamo tipas: null"
  );
  console.assert(
    didziausiasSkaiciusSarase(undefined) === "Pateikta netinkamo tipo reikšmė.",
    "Netinkamo tipas: undefined"
  );
  console.assert(
    didziausiasSkaiciusSarase() === "Pateikta netinkamo tipo reikšmė.",
    "Netinkamo tipas: undefined (nes nepateiktas parametras)"
  );
  console.assert(
    didziausiasSkaiciusSarase({}) === "Pateikta netinkamo tipo reikšmė.",
    "Netinkamo tipas: object"
  );
}

//  Masyvas kuriame nėra didžiausio skaičiaus
console.assert(
  didziausiasSkaiciusSarase([]) === "Pateiktas skaičius negali būti tuščias",
  "Tuščias masyvas"
);
console.assert(
  didziausiasSkaiciusSarase([true]) ===
    "Pateiktas skaičius negali būti tuščias",
  "Tuščias masyvas"
);
console.assert(didziausiasSkaiciusSarase([true, 5]) === 5, "Tuščias masyvas");

// Sąrašas su sveikaisiais teigiamais skaičiais
{
  console.assert(
    didziausiasSkaiciusSarase([1]) === 1,
    "Grazinamas vienintelis masyve esantis skaicius: 1"
  );
  console.assert(
    didziausiasSkaiciusSarase([5]) === 5,
    "Grazinamas vienintelis masyve esantis skaicius: 5"
  );
  console.assert(
    didziausiasSkaiciusSarase([1, 2, 3]) === 3,
    "Masyvo paskutinis skaičius: 3"
  );
  console.assert(
    didziausiasSkaiciusSarase([3, 2, 3]) === 3,
    "Masyvo pirmas skaičius: 3"
  );

  console.assert(
    didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]) === 78,
    "Masyvo 'vidury': 78"
  );
  console.assert(
    didziausiasSkaiciusSarase([-5, 18, 14, 0, 78]) === 3,
    "Masyvo paskutinis skaičius: 78"
  );
  console.assert(
    didziausiasSkaiciusSarase([78, 18, 14, 0, -5]) === 3,
    "Masyvo pirmas skaičius: 78"
  );
  console.assert(
    didziausiasSkaiciusSarase([69, 69, 69, 69]) === 69,
    "Masyve visos reikšmės vienodos"
  );

  console.assert(
    didziausiasSkaiciusSarase([69, 69, 69, 69, 66]) === 69,
    "pasikartojanti didžiausia reikšmė"
  );
  console.assert(
    didziausiasSkaiciusSarase([0, 3.14, 2.72, 4]) === 4,
    " didžiausia reikšmė 4 "
  );
  console.assert(
    didziausiasSkaiciusSarase([0, 3.14, 2.72]) === 3.14,
    " didžiausia reikšmė 3.14 "
  );
}
// sąrašas su sveikaisiais neigiamais skaičiaias
{
  console.assert(
    didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]) === -1,
    "Didžiausia reikšmė: -1"
  );
  console.assert(
    didziausiasSkaiciusSarase([-2, -3, -4, -5, -6, -7, -8]) === -2,
    "Didžiausia reikšmė: -2"
  );
  console.assert(
    didziausiasSkaiciusSarase([-3.24, -4.25, -4, -5, -6, -7, -8]) === -3.24,
    "Didžiausia reikšmė: -2"
  );
}

// console.assert(didziausiasSkaiciusSarase([]) === 'Pateiktas sąrašas negali būti tuščias.', 'Err: 7');

// console.log(didziausiasSkaiciusSarase([1]), '-->', 1);
// console.log(didziausiasSkaiciusSarase([1, 2, 3]), '-->', 3);
// console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]), '-->', 78);
// console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]), '-->', 69);
// console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
// console.log(didziausiasSkaiciusSarase('pomidoras'), '-->', 'Pateikta netinkamo tipo reikšmė.');
// console.log(didziausiasSkaiciusSarase([]), '-->', 'Pateiktas sąrašas negali būti tuščias.');
