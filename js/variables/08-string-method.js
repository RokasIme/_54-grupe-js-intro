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
const tikslas =
  "aš einu į parduotuvę, neveikia backslash/', naudojama užtaginti";
console.log(String.raw`Aš einu ${tikslas}`);
