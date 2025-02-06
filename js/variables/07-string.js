/*
STRING - tekstas, simbolių grendinėlė
inicijavimas galimas:
- ' viengubomis kabutėmis
- " dvigubomis kabutėmis
- ` Backtick
*/

const firstname = "Chuck";
console.log(firstname);

const lastName = "Norris";
console.log(lastName);

const fullname = firstname + " " + lastName;
console.log(fullname);

const age = 84;

// Hi, my name is Chuck and i am 84 years old
// Hi, my name is {NAME}} and i am (AGE) years old

const chuckIntro =
  "Hi, my name is " + firstname + " and i am " + age + " years old";
console.log(chuckIntro);

// Kabute: ' (vienguba).
const k1 = "kabute ' vienguba";
console.log(k1);

// kabute: " (dviguba).
const k2 = 'kabute " (dviguba)';
console.log(k2);

//Kabutes: ' (vienguba) ir " (dviguba).
const k12 = "Kabutes: ' (vienguba) ir " + '(dviguba)".';
console.log(k12);

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/

const html1 = "<div>";
const html2 = "     <h1>Labas rytas, Lietuva!</h1>";
const html3 = "     <p>Pirmadienis.</p";
const html4 = "     <p>Pomidoras.</p>";
const html5 = "</div>";

console.log(html1);
console.log(html2);
console.log(html3);
console.log(html4);
console.log(html5);

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/
// \n - new line
// \r - return - gra=ina kursorių į eilutės pradžią
// \t - tab = 4space/8space (galima konfiguruoti ir keisti per setings)
// \r\n - 'ultimate' - new line (enter)

const html =
  "<div>\r\n\
 \t<h1>Labas rytas, Lietuva!</h1>\r\n\
 \t<p>Pirmadienis.</p>\r\n\
 \t<p>Pomidoras.</p>\r\n\
</div>";

console.log(html);

//Kabutes: ' (vienguba) ir " (dviguba).
const k3 = "Kabutes: ' (vienguba) ir \"(dviguba).";
console.log(k3);
const k4 = "Kabutes: ' (vienguba)' ir \"(dviguba).";
console.log(k4);
const k5 = "Kabutes:' (vienguba) ir \"(dviguba).";
console.log(k5);

// ` - Backtick (kabutė)- spausdina visą teksto bloką
const b = `Labas`;
console.log(b);

const bHtml = `<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>`;
console.log(bHtml);

const backtickBedute1 = "kabute ` backtick";
const backtickBedute2 = "kabute ` backtick";
const backtickBedute3 = `kabute \` backtick`;
console.log(backtickBedute1);
console.log(backtickBedute2);
console.log(backtickBedute3);

const luckyNumber = 13;

// My lucky number is 13.

const lucky = "My lucky number is " + luckyNumber + ".";
console.log(lucky);

const lucky2 = `My lucky number is ${luckyNumber}`;
console.log(lucky2);

const chuckBack = `Hi, my name is ${firstname} and i am ${age} years old`;
console.log(chuckBack);

//price: $45.00 - doleris su {} veikia tik ``
const price1 = 45;
console.log(price1);

const price2 = "price: $${price}.00";
console.log(price2);

const price3 = `price: $${price1}.00`;
console.log(price3);

// C:\Documents\troliai (daryti kad \ pats spausdintų save\)
const troliai1 = "C:\\Documents\\troliai\\rekia\\namie";
console.log(troliai1);
