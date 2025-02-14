// Praktinių Užduočių sting metodai
// Sukurkite stringą ir išveskite jo ilgį.
const ilgis = "belzebubas";
console.log(ilgis.length);

// Konvertuokite stringą į didžiąsias raides.
console.log(ilgis.toUpperCase());

// Konvertuokite stringą į mažąsias raides.
console.log(ilgis.toLowerCase());

// Pašalinkite tarpus iš string'o pradžios ir pabaigos.
const sakinys = " Ėjo ežiukas mišku ir ... ";
console.log(sakinys.trim());

// Patikrinkite, ar stringas prasideda žodžiu "Hello".
const sakinys1 = "Hello fun Wold";
console.log(sakinys1.startsWith("Hello"));

// Patikrinkite, ar stringas baigiasi žodžiu "World".
console.log(sakinys1.endsWith("World"));

// Raskite pirmąją žodžio "Java" poziciją string'e.
const sakinys2 = "kas ta Java ar ne Java";
console.log(sakinys2.indexOf("Java"));

// Raskite paskutinę žodžio "Java" poziciją string'e.
console.log(sakinys2.lastIndexOf("Java"));

// Pakeiskite pirmąjį "Java" į "JS".
const zodis1 = "Java Java Java Java";
console.log(zodis1.replace("Java", "JS"));

// Pakeiskite visus "Java" į "JS".
console.log(zodis1.replaceAll("Java", "JS"));

// Padalinkite stringą į masyvą pagal skyriklį.
const zodis = "Java";
console.log(Array.from(zodis));
console.log(sakinys.split(" "));

// Sujunkite du string'us į vieną.
console.log(zodis.concat(", ", ilgis));

// Išskirkite string'o dalį nuo 3 iki 8 simbolio.
console.log(ilgis.slice(3, 8));
console.log(ilgis.substring(3, 8));

// Naudodami slice, paimkite paskutinius 5 string'o simbolius.
console.log(ilgis.slice(ilgis.length - 5));

// Naudodami substring, paimkite pirmus 5 string'o simbolius.
console.log(ilgis.substring(0, 5));

// Sukurkite stringą, kuris pakartojamas 4 kartus.
console.log(zodis.repeat(4));

// Patikrinkite, ar string'e yra žodis "fun".
console.log(sakinys1.includes("fun"));

// Išveskite stringą su kabutėmis "teksto" viduje.
console.log('"' + zodis + '"');

// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
const vardas = "Rokas";
console.log(`${vardas} yra geras žmogus`);

// Pašalinkite tarpus tik iš string'o pradžios.
console.log(sakinys.trimStart());

// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
const did = "mokymo centras";
const skaid = did.split(" ");
for (i = 0; i < skaid.length; i++) {
  console.log(skaid[i][0]);
  skaid[i] = skaid[i][0].toUpperCase() + skaid[i].substring(1);
}
console.log(skaid.join(" "));

// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.
const programavimas = "JavaScript programavimas";
console.log(programavimas.substring(0, 10) + "...");

// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.

const tekstas = "JavaScript";
const tekstskaid = tekstas.split("");
const tekstatvirk = tekstskaid.reverse();

console.log(tekstatvirk.join(""));

// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
const tekstas1 = "obuolys, bananas, kivis";
console.log(tekstas1.replaceAll(",", ";"));

// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".
const tekstas2 = "Šiandien gera diena.";
console.log(tekstas2.split(" ").length);

// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.
const tekstas3 = "test@gmail.com";
console.log(tekstas3.includes("@"));
console.log(tekstas3.endsWith(".com"));

// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.
const tekstas4 = " JavaScript";
console.log(tekstas4.trimStart());

// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.
const zod1 = "JavaScript";
const zod2 = "javascript";
console.log(zod1.toLocaleLowerCase === zod2.toLocaleLowerCase);

// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".
let tekstas5 = "a1b2c3";
const num = "0123456789";
let numsum = 0;
let tekstasclear = "";

for (let i = 0; i < tekstas5.length; i++) {
  if (num.includes(tekstas5[i])) {
    numsum++;
  } else {
    tekstasclear = tekstasclear + tekstas5[i];
  }
}
console.log(tekstasclear);

// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.
let tekstas6 = "a1b2c3";
const num1 = "0123456789";
let numsum1 = 0;

for (let i = 0; i < tekstas5.length; i++) {
  if (num1.includes(tekstas6[i])) {
    numsum1++;
  } else {
  }
}
console.log(numsum1);

// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.
const text = "HTML CSS JS";
const textarr = text.split(" ");
let firstletters = "";
for (i = 0; i < textarr.length; i++) {
  firstletters = firstletters + textarr[i][0];
}
console.log(firstletters);

// 12. Raskite pirmą žodį string'e "Hello World!".
const pasisveikinimas = "Hello World!";
console.log(pasisveikinimas.split(" ")[0]);

// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.
console.log(tekstas.slice(0, -3));

// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.
let daysLeft = "8";

console.log(`Likusios dienos: 5 iš ${daysLeft}`);

// 15. Tekste "mokytojas" pakeiskite pabaigą į "oja", kad gautumėte "mokytoja".
const tekstas7 = "Į mokyklą atvyko mokytojas";
const tekstas7split = tekstas7.split(" ");

for (let i = 0; i < tekstas7split.length; i++) {
  if (tekstas7split[i] === "mokytojas") {
    tekstas7split[i] = "mokytojas".slice(0, -4) + "oja";
  }
}

console.log(tekstas7split.join(" "));

// 15.2 antras variantas
const tekstas8 = "Mokytojas atėjo ir tarė. Ryte mokytojas vaikšto ";
const textFemale = tekstas8
  .replaceAll("mokytojas", "mokytoja")
  .replaceAll("Mokytojas", "Mokytoja");
console.log(textFemale);

// include metodui parašyti ciklą include('asdsdfsf', 'a')
const text8 = "Ejo eziukas misku, pamate lape";
const textSplit = text8.split(" ");
const ieskomas = "lape";
let rezultatas = "Tokio žodžio nėra";

for (let i = 0; i < textSplit.length; i++) {
  if (textSplit[i] === ieskomas) {
    rezultatas = "Tekste yra ieškomas žodis";
  }
}
console.log(rezultatas);
