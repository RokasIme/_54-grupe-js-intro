/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
*/

const firstname = "Chuck";
const nameSize = firstname.length;

console.log(firstname, firstname.length);
console.log(firstname, nameSize);

// Chuck name is 5 letters long
const chuckName = `${firstname} name is ${firstname.length} letters`;
console.log(chuckName);

// Raw neveikia backslash /, naudojama užtaginti
const tikslas = "aš einu į parduotuvę, neveikia backslash /', ";
console.log(String.raw`Aš einu ${tikslas}`);

// [] - Atvaizduoja simbolį kuris yra konkrečioje vietoje, prasideda nuo 0
const vardas = "Jurgita";
console.log(vardas.length - 1);
console.log(vardas[0]);
console.log(vardas[3]);
console.log(vardas[6]);

// includes(), startsWith(), endWith();
const dalis = "Mes ieškome žodžių ir jų dalių";
console.log("");
console.log(dalis.includes("kom"));
console.log(dalis.startsWith("žod"));
console.log(dalis.startsWith("Mes"));
console.log(dalis.endsWith("lių"));

// indexOf () parodo ties kuriuo charakteriu prasideda tesktas
const zodis =
  "mes nežinome kokioje vietoje prasideda mūsų pasirinkta teksto dalisir vėl prasideda";

console.log("");
console.log(zodis.indexOf("prasideda"));
console.log(zodis.indexOf("prasideda", zodis.indexOf("prasideda") + 1));
console.log(zodis.indexOf("mes"));
console.log(zodis.indexOf("rinkta"));

const chuck = "chuck";
console.log("-->", chuck[0]);
console.log("-->", chuck[1]);
console.log("-->", chuck[2]);
console.log("-->", chuck[3]);

for (let i = 0; i < chuck.length; i++) {
  console.log("--->", i, chuck[i]);
}

console.log("žodis atvirkščiai");
for (let i = chuck.length - 1; i >= 0; i--) {
  console.log("--->", i, chuck[i]);
}
console.clear();

// vasara kiek turi raidžių - a ?
// vasara kiek turi raidžių - v ?
// vasara kiek turi raidžių - s ?
const word = "vasara";
let countA = 0;
let countV = 0;
let countS = 0;

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
  if (word[i] === "a") {
    countA++;
  }
  if (word[i] === "v") {
    countV++;
  }
  if (word[i] === "s") {
    countS++;
  }
}
console.log(`Žodyje "${word}" yra ${countA} "a" raidės`);
console.log(`Žodyje "${word}" yra ${countV} "v" raidės`);
console.log(`Žodyje "${word}" yra ${countS} "s" raidės`);

// skaičiuoja kiek simbolių
function letterCount(text, searchSymbol) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === searchSymbol) {
      count++;
    }
  }

  return `Žodyje "${text}" yra ${count} "${searchSymbol}" raidės`;
}
console.log(letterCount("vasara", "a"));
console.log(letterCount("vasara", "v"));
console.log(letterCount("vasara", "s"));

function doesTextIncludesSymbol(text, symbol) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === symbol) {
      return true;
    }
  }
  return false;
}
console.log(doesTextIncludesSymbol("vasara", "a"));
console.log(doesTextIncludesSymbol("vasara", "g"));
console.log("vasara".includes("a"));

console.clear();

console.log("pomidoras".charAt(0));
console.log("pomidoras".charAt(2));
console.log("pomidoras".charAt(-2), "pomidoras"[-2]);

console.log("ABCDEF".charCodeAt(0));
console.log("ABCDEF".charCodeAt(1));
console.log("ABCDEF".charCodeAt(2));
console.log("Z".charCodeAt(0));
console.log("abcdef".charCodeAt(0));
console.log("abcdef".charCodeAt(0));
console.log("abcdef".charCodeAt(0));

// concat tas pats kas  + + +
console.log("pomidoras".concat("aaa", "bbb"));

//index off, antras skaičius nurodo nuo kurios pozicijos pradėti ieškoti.
console.log("pomidoras".indexOf("o"));
console.log("pomidoras".indexOf("o", 1));
console.log("pomidoras".indexOf("o", 2));

console.log("a".repeat(20));

console.log("vasara");
console.log("vasara".replace("a", "-"));
console.log("vasara".replace("a", "-").replace("a", "-").replace("a", "-"));

let bird = "kikilis";
console.log(bird);
bird = bird.replaceAll("k", "-=K=-");
console.log(bird);
bird = bird.replaceAll("=-", "");
console.log(bird);
bird = bird.replaceAll("-=", "");
console.log(bird);

// slice (nuo, iki) minusiniai skaičiuoja nuo žodžio galo.
console.log("pomidoras".slice());
console.log("pomidoras".slice(2, 6));
console.log("pomidoras".slice(2, -3));
console.log("pomidoras".slice(-4));
