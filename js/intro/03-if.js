/*
IF - sąlygos sakiniai

Pagrindiniai kodo šablonai
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} .... else if () {}
if () {} else if () {} .... else if () {} else{}

Palyginimo operatoriai:
- viso: >, <, <=, >=, !=, !==, ==, ===
- naudotini: >, <, <=, >=, !==, ===
- nenaudotini: !=, ==

Loginiai operatoriai
&&
||
*/

if (4 >= 2) {
  console.log("Taip");
} else {
  console.log("Ne");
}

const a = 5;
if (a === 1) {
  console.log("vienas");
} else if (a === 2) {
  console.log("du");
} else if (a === 3) {
  console.log("trys");
} else if (a === 4) {
  console.log("keturi");
} else if (a === 5) {
  console.log("penki");
} else if (a === 6) {
  console.log("šeši");
} else {
  console.log("neatpažintas skaičius");
}

const n = 13;
if (n % 2 === 0) {
  console.log("lyginis");
} else {
  console.log("nelyginis");
}

switch (n % 2) {
  case 0:
    console.log("Lyginis");
    break;
  case 1:
    console.log("Nelyginis");
    break;
}

const d = 1;
if (d === 1) {
  console.log("pirmadienis");
} else if (d === 2) {
  console.log("t");
} else if (d === 3) {
  console.log("trečiadienis");
} else if (d === 4) {
  console.log("ketvirtadienis");
} else if (d === 5) {
  console.log("penktadienis");
} else if (d === 6) {
  console.log("sestadienis");
} else if (d === 7) {
  console.log("sekmadienis");
}

// nested if (kai folderio viduk kitas folderis)
const d2 = 7;

if (d2 === 1) {
  console.log("pirmadienis");
} else {
  if (d2 === 2) {
    console.log("antradienis");
  } else {
    if (d2 === 3) {
      console.log("trečiadienis");
    } else if (d2 === 4) {
      console.log("ketvirtadienis");
    } else {
      if (d2 === 5) {
        console.log("penktadienis");
      } else {
        if (d2 === 6) {
          console.log("sestadienis");
        } else {
          if (d2 === 7) {
            console.log("sekmadienis");
          }
        }
      }
    }
  }
}

const d3 = 7;

switch (d3) {
  case 1:
    console.log("pirmadienis");
    break;
  case 2:
    console.log("antradienis");
    break;
  case 3:
    console.log("trečiadienis");
    break;
  case 4:
    console.log("Ketvirtadienis");
    break;
  case 5:
    console.log("penktadienis");
    break;
  case 6:
    console.log("sestadienis");
    break;
  case 7:
    console.log("sekmadienis");
    break;
  default:
    console.log("savaitėje nėra tokios dienos");
}

// 1-5 - darbo diena
// 6-7 - savaitgalis

const d4 = 4;

if (d4 === 1 || d4 === 2 || d4 === 3 || d4 === 5) {
  console.log("-- darbo diena");
} else if (d4 === 6 || d4 === 7) {
  console.log("-- savaitgalis");
} else {
  console.log("-- tokia diena neegzistuoja");
}

if (d4 >= 1 && d4 <= 5 && d4 % 1 === 0) {
  console.log("## darbo diena");
} else if (d4 === 6 || d4 === 7) {
  console.log("## savaitgalis");
} else {
  console.log("## tokia diena neegzistuoja");
}

// switch  Case dirba iki kol sutinka break!!!

const d5 = 6;
switch (d5) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Darbo diena");
    break;
  case 6:
  case 7:
    console.log("Savaitgalis");
    break;
  default:
    console.log("savaitėje nėra tokios dienos");
}

/*
1. pasiimame puodeli
2. į arbartinuką įpilam vandens
3. užkaičiame
4. į puodelį įdedame arbatos
5. užpilame karštu vandeniu
*/
console.clear();

const teaStep = 1;

switch (teaStep) {
  case 1:
    console.log("pasiimame puodeli");
  case 2:
    console.log("į arbartinuką įpilam vandens");
  case 3:
    console.log("užkaičiame");
  case 4:
    console.log("į puodelį įdedame arbatos");
  case 5:
    console.log("užpilame karštu vandeniu");
  default:
    console.log("Labas");
}

const stop = "Rudens 2";

switch (stop) {
  case "Geniu 1":
    console.log("🚌Geniu");
  case "Tremtiniu 1":
    console.log("🚌Tremtiniu");
  case "Rudens 1":
    console.log("🚌Rudens");
  case "Mindaugo ":
    console.log("🚌Mindaugo");
  case "Zaliasis tiltas":
    console.log("🚌Zaliasis tiltas");
    break;
  case "Lvovo":
    console.log("🚌Lvovo");
  case "Vasara":
    console.log("🚌Vasara");
  case "Rudens 2":
    console.log("🚌Rudens");
  case "Tremtiniu 2":
    console.log("🚌Tremtiniu");
  case "Geniu 2":
    console.log("🚌Geniu");
    break;
}

console.clear();

const temp = 15;
const isDay = false;
if (temp > 18) {
  switch (isDay) {
    case true:
      console.log("Silta");
      break;
    case false:
      console.log("Silta naktis");
      break;
  }
} else {
  switch (isDay) {
    case true:
      console.log("Šalta diena");
      break;
    case false:
      console.log("Šalta naktis");
      break;
  }
}
// UNARY (1)
// TERNARY (2)
// TERNARY (3)

const x = 5;

const y = 2 + 2;

let text = "";
if (4 > 2) {
  text = "Taip";
} else {
  text = "Ne";
}

console.log(text);

const text2 = 4 > 2 ? "Taip" : "Ne";
console.log(text2);

const amziausRiba = 18;
const jonoAmzius = 99;
const jonas = jonoAmzius >= amziausRiba ? "Pilnametis" : "nepilnametis";

console.log(jonas);

console.log(1 < 2 ? 3 : 4);
console.log(2 > 3 ? 4 : 5 ? 6 : 7);
console.log(1 < 2 ? (3 ? 4 : 5) : 6 ? 7 : 8);

// visi skaičiai yra pozityvūs (truthy)
// 0 yra negatyvus (falsy)

if (0) {
  console.log("ok");
} else {
  console.log("not so ok");
}

// visi string yra pozityvus
// isskyrus tuscia

if ("") {
  console.log("ok");
} else {
  console.log("not ok");
}

// ! šauktukas apverčia logiką true False
const username = "";

if (!username) {
  console.log("labas", username);
} else {
  console.log("Labas", username, "!");
}

console.log(0 ? (1 ? 2 : 3) : 4 ? 5 : 6);
/*
1 
    ? 2 
    : 3 

    
    0 
        ? 1 
            ? 2 
            : 3 
        : 4 
            ? 5  - laimi
            : 6
*/
