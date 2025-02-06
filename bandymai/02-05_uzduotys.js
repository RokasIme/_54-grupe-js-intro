/* Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono pavadinimą
 ("Pavasaris", "Vasara", "Ruduo", "Žiema").
 Kuri struktūra geriausiai tinka šiam uždaviniui? */

function metuLaikai(menuo) {
  return menuo === 12 || menuo === 1 || menuo === 2
    ? "pavasaris"
    : menuo === 3 || menuo === 4 || menuo === 5
    ? "Vasara"
    : menuo === 6 || menuo === 7 || menuo === 8
    ? "Ruduo"
    : menuo === 9 || menuo === 10 || menuo === 11
    ? "Žiema"
    : "Tokio mėnesio nėra";
}

console.log("Pirma");
console.log(metuLaikai(1));
console.log(metuLaikai(4));
console.log(metuLaikai(7));
console.log(metuLaikai(11));
console.log(metuLaikai(15));

function sezonas(men) {
  if (men === 12 || men === 1 || men === 2) {
    return "Žiema";
  } else if (men === 3 || men === 4 || men === 5) {
    return "Pavasaris";
  } else if (men === 6 || men === 7 || men === 8) {
    return "Vasara";
  } else if (men === 9 || men === 10 || men === 11) {
    return "ruduo";
  } else return "Netinkamai įvestas mėnuo";
}

console.log("pirmos antras variantas");
console.log(sezonas(1));
console.log(sezonas(4));
console.log(sezonas(7));
console.log(sezonas(11));
console.log(sezonas(15));

/* // Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, 
// ir atitinkamai išveda pranešimą.Kuris operatorius naudoti? */

function lygus(num1, num2) {
  return num1 === num2 ? "Lygūs" : "Nelygūs";
}

console.log("");
console.log("Antra");
console.log(lygus(2, 3)); // Nelygūs
console.log(lygus(5, 5)); // Lygūs

/* Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis
 yra balsė, priebalsė ar nėra raidė.Koks operatorius geriausiai tinka? */

function balse(raide) {
  raide = raide.toLowerCase();

  const balses = ["a", "ą", "e", "ę", "ė", "i", "į", "y", "o", "u", "ū", "ų"];
  const priebalse = [
    "b",
    "c",
    "č",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "š",
    "t",
    "v",
    "z",
    "ž",
  ];

  return balses.includes(raide)
    ? "Balse"
    : priebalse.includes(raide)
    ? "Priebalse"
    : "Įvesta ne raidė";
}

console.log("");
console.log("Trečia");
console.log(balse("a"));
console.log(balse("k"));
console.log(balse("F"));

/* Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) 
 išveda, ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti? */

function work(day) {
  switch (day) {
    case "pirmadienis":
    case "antradienis":
    case "trečiadienis":
    case "ketvirtadienis":
    case "penktadienis":
      return "Darbo diena";
    case "šeštadienis":
    case "sekmadienis":
      return "Ne darbo diena";
    default:
      return "netinkamai įvesta diena";
  }
}

console.log("");
console.log("Ketvirta");
console.log(work("pirmadienis"));
console.log(work("sekmadienis"));

/* Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę:
  "Šalta"(< 10°C), "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka? */

function weather(degrees) {
  switch (true) {
    case degrees < 10:
      return "Šalta";
    case degrees >= 10 && degrees < 25:
      return "Šilta";
    case degrees >= 25:
      return "Karšta";
    default:
      return "netinkama";
  }
}

console.log("");
console.log("Penkta");
console.log(weather(10));
console.log(weather(5));
console.log(weather(30));

/* Parašykite programą, kuri patikrina, ar vartotojo 
  įvestas skaičius yra daliklis tiek 3, tiek 5. Kurį operatorių naudoti? */

function daliklis(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "daliklis";
  } else return "šis skaičius nedalus iš 3 iš 5";
}

console.log("");
console.log("šešta");
console.log(daliklis(15));
console.log(daliklis(6));

/* sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") 
išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka? */

function ilsetis(diena) {
  switch (diena) {
    case "darbo diena":
      return "Dirbti";
    case "savaitgalis":
      return "Ilsėtis";
    default:
      return "netinkamai įvesta diena";
  }
}

console.log("");
console.log("septinta");
console.log(ilsetis("darbo diena"));
console.log(ilsetis("savaitgalis"));

/* Parašykite programą, kuri nustato,
 ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti? */

//Julijaus kalendoriuje tik iš 4 dalyba.
/* Grigaliaus kalendoriuje keliamieji metai skaičiuojami kaip Julijaus kalendoriuje, 
 tačiau paskutiniai amžiaus metai 
(dalijasi iš 100 be liekanos) yra keliamieji tik tada, jei be liekanos dalijasi iš 400. */

function keliami(metai) {
  return metai % 4 === 0 && (metai % 100 !== 0 || metai % 400 === 0) // reiks paaiškinimo || (jeigu, tai)
    ? "Keliamieji"
    : "Nekeliamieji";
}

console.log("");
console.log("astunta");
console.log(keliami(2004));
console.log(keliami(1985));
console.log(keliami(500));

function keliami2(met) {
  if (new Date(met, 1, 29).getDate() === 29) {
    return true;
  }
  return false;
}
console.log("--------------------");
console.log(keliami2(2004));
console.log(keliami2(1985));
console.log(new Date());

/* Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos 
 rekomendaciją: "Kepurių nereikia","Kepurės reikalingos", "Geriau neik į lauką".
 Koks operatorius geriausiai tinka? */

function kepure(celsius) {
  switch (true) {
    case celsius < -10:
      return "Geriau neik į lauką";
    case celsius >= -10 && celsius < 12:
      return "Kepurės reikalingos";
    case celsius >= 12:
      return "Kepurės nereikia";
    default:
      return "netinkamai įvesta temperatūra";
  }
}

console.log("");
console.log("devinta");
console.log(kepure(-20));
console.log(kepure(10));
console.log(kepure(25));
