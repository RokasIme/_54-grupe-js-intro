/* Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
*/

function strCount(str, letter) {
  let count = 0;
  const strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(strCount("Hello", "o"), 1);

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

function strCount(str, letter) {
  return str.split("").filter((c) => c == letter).length;
}

function strCount(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) count++;
  }

  return count;
}
