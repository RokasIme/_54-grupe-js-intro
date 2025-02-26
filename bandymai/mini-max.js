console.assert(1 === 1, "Vienetai nelygus"); // nespausdina nieko, jei sąlygos netenkins, spausdins
console.assert(2 === 1, "Labas", "rytas", "Lietuva");

function didziausiasSkaiciusSarase(list) {
  if (!Array.isArray(list)) {
    return "Pateikta netinkamo tipo reikšmė.";
  }
  if (list.length === 0) {
    return "Pateiktas skaičius negali būti tuščias";
  }
  let biggestNumber = -Infinity;

  const hasNormalNumber = list.some(
    (n) => typeof n === "number" && isFinite(n)
  );
  if (!hasNormalNumber) {
    return "Sąraše nerasta tinkama reikšmė";
  }

  for (const number of list) {
    if (number === Infinity) {
      continue;
    }
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  if (biggestNumber === -Infinity) {
    return "Sąraše nerasta tinkama reikšmė";
  }

  return biggestNumber;
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
{
  //  Masyvas kuriame nėra didžiausio skaičiaus
  console.assert(
    didziausiasSkaiciusSarase([]) === "Pateiktas skaičius negali būti tuščias",
    "Tuščias masyvas"
  );
  console.assert(
    didziausiasSkaiciusSarase([true]) === "Sąraše nerasta tinkama reikšmė",
    "Tuščias masyvas"
  );
  console.assert(
    didziausiasSkaiciusSarase([true]) === "Sąraše nerasta tinkama reikšmė",
    "(boolean)"
  );
  console.assert(
    didziausiasSkaiciusSarase(["string"]) === "Sąraše nerasta tinkama reikšmė",
    "(string)"
  );
  console.assert(
    didziausiasSkaiciusSarase([[]]) === "Sąraše nerasta tinkama reikšmė",
    " (array)"
  );
  console.assert(
    didziausiasSkaiciusSarase([{}]) === "Sąraše nerasta tinkama reikšmė",
    "(object)"
  );
  console.assert(
    didziausiasSkaiciusSarase([Infinity]) === "Sąraše nerasta tinkama reikšmė",
    "(infinity)"
  );
  console.assert(
    didziausiasSkaiciusSarase([-Infinity]) === "Sąraše nerasta tinkama reikšmė",
    "Infinity"
  );
  console.assert(
    didziausiasSkaiciusSarase([NaN]) === "Sąraše nerasta tinkama reikšmė",
    "(NaN)"
  );
  console.assert(
    didziausiasSkaiciusSarase([undefined]) === "Sąraše nerasta tinkama reikšmė",
    "(undefined)"
  );
  console.assert(
    didziausiasSkaiciusSarase([null]) === "Sąraše nerasta tinkama reikšmė",
    "(null)"
  );
  console.assert(
    didziausiasSkaiciusSarase([didziausiasSkaiciusSarase]) ===
      "Sąraše nerasta tinkama reikšmė",
    "(function)"
  );
  // Masyvas, kuriame apart didžiausio skaičiaus yra ir kitų netinkamų reikšmių
  console.assert(
    didziausiasSkaiciusSarase(
      [true, 5] === 5,
      "Didžiausia reikšmė: 5 (boolean)"
    )
  );
  console.assert(
    didziausiasSkaiciusSarase(["string", 5]) === 5,
    "Didžiausia reikšmė: 5 (string)"
  );
  console.assert(
    didziausiasSkaiciusSarase([5, "string"]) === 5,
    "Didžiausia reikšmė: 5 (string)"
  );
  console.assert(
    didziausiasSkaiciusSarase([[], 5]) === 5,
    "Didžiausia reikšmė: 5 (array)"
  );
  console.assert(
    didziausiasSkaiciusSarase([{}, 5]) === 5,
    "Didžiausia reikšmė: 5 (object)"
  );
  console.assert(
    didziausiasSkaiciusSarase([Infinity, 5]) === 5,
    "Didžiausia reikšmė: 5 (infinity)"
  );
  console.assert(
    didziausiasSkaiciusSarase([-Infinity, 5]) === 5,
    "Didžiausia reikšmė: 5"
  );
  console.assert(
    didziausiasSkaiciusSarase([NaN, 5]) === 5,
    "Didžiausia reikšmė: 5 (NaN)"
  );
  console.assert(
    didziausiasSkaiciusSarase([undefined, 5]) === 5,
    "Didžiausia reikšmė: 5 (undefined)"
  );
  console.assert(
    didziausiasSkaiciusSarase([null, 5]) === 5,
    "Didžiausia reikšmė: 5 (null)"
  );
  console.assert(
    didziausiasSkaiciusSarase([didziausiasSkaiciusSarase, 5]) === 5,
    "Didžiausia reikšmė: 5 (function)"
  );
}

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
    didziausiasSkaiciusSarase([-5, 18, 14, 0, 78]) === 78,
    "Masyvo paskutinis skaičius: 78"
  );
  console.assert(
    didziausiasSkaiciusSarase([78, 18, 14, 0, -5]) === 78,
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
