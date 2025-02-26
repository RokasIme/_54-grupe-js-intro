function correctPolishLetters(string) {
  let splitString = string.split("");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === "ą") {
      splitString[i] = "a";
    }
    if (splitString[i] === "ć") {
      splitString[i] = "c";
    }
    if (splitString[i] === "ę") {
      splitString[i] = "e";
    }
    if (splitString[i] === "ł") {
      splitString[i] = "l";
    }
    if (splitString[i] === "ń") {
      splitString[i] = "n";
    }
    if (splitString[i] === "ó") {
      splitString[i] = "o";
    }
    if (splitString[i] === "ś") {
      splitString[i] = "s";
    }
    if (splitString[i] === "ź") {
      splitString[i] = "z";
    }
    if (splitString[i] === "ż") {
      splitString[i] = "z";
    }
  }
  return splitString.join("");
}

//   ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");

function correctPolishLetters(string) {
  var dict = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}

var polishLetters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};

function correctPolishLetters(string) {
  return string
    .split("")
    .map((c) => polishLetters[c] || c)
    .join("");
}
