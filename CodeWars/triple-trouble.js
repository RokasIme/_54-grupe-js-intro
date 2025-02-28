/* Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

function tripleTrouble(one, two, three) {
  const splitA = one.split("");
  const splitB = two.split("");
  const splitC = three.split("");
  let newArr = [];

  for (let i = 0; i < one.length; i++) {
    newArr.push(splitA[i]);
    newArr.push(splitB[i]);
    newArr.push(splitC[i]);
  }
  return newArr.join("");
}

console.log(tripleTrouble("aaa", "bbb", "ccc"));

function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}
