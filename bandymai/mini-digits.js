function skaitmenuKiekisSkaiciuje(n) {
  //    parametrų validacija
  if (typeof n !== "number") {
    return " Pateikta netinkamo tipo reikšmė";
  }
  if (!isFinite(n)) {
    return " Pateikta netinkam skaičiaus tipo reikšmė";
  }
  //  alternatyva !isFinite(n)
  //   if (isNaN(n) || n === Infinity || n === -Infinity) {
  //     return " Pateikta netinkam skaičiaus tipo reikšmė";
  //   }

  // logika
  let result = ("" + n).length;

  if (n < 0) {
    result--;
  }

  if (n % 1 !== 0) {
    result--;
  }

  // rezultato validacija

  // rezultato grazinimas

  return result;
}

console.log("   SkaitmenuKiekisSkaiciuje \n");
console.log(skaitmenuKiekisSkaiciuje(5), "-->", "1");
console.log(skaitmenuKiekisSkaiciuje(-5), "-->", "1");
console.log(skaitmenuKiekisSkaiciuje(781), "-->", " 3");
console.log(skaitmenuKiekisSkaiciuje(37060123456), "-->", " 11");
console.log(skaitmenuKiekisSkaiciuje(3.14), "-->", " 3");
console.log(skaitmenuKiekisSkaiciuje(-3.14), "-->", " 3");

console.log(
  skaitmenuKiekisSkaiciuje(true),
  "-->",
  "Pateikta netinkamo tipo reikšmė "
);
console.log(
  skaitmenuKiekisSkaiciuje("asd"),
  "-->",
  " Pateikta netinkamo tipo reikšmė"
);
console.log(
  skaitmenuKiekisSkaiciuje(NaN),
  "-->",
  "Pateikta netinkama skaičiaus tipo reikšmė "
);
console.log(
  skaitmenuKiekisSkaiciuje(null),
  "-->",
  " Pateikta netinkamo tipo reikšmė"
);
console.log(
  skaitmenuKiekisSkaiciuje(undefined),
  "-->",
  " Pateikta netinkamo tipo reikšmė"
);
console.log(
  skaitmenuKiekisSkaiciuje(),
  "-->",
  " Pateikta netinkamo tipo reikšmė"
);
