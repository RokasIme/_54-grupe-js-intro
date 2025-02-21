/* Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

function arrayMadness(a, b) {
  let kvadratuSuma = 0;
  let kubuSuma = 0;

  kvadratuSuma = a.map((a) => a * a).reduce((a, b) => a + b, 0);
  kubuSuma = b.map((a) => a * a * a).reduce((a, b) => a + b, 0);
  if (kvadratuSuma > kubuSuma) {
    return true;
  } else {
    return false;
  }
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

function arrayMadness(a, b) {
  return (
    a.reduce((sum, el) => sum + el ** 2, 0) >
    b.reduce((sum, el) => sum + el ** 3, 0)
  );
}

function arrayMadness(a, b) {
  return a.reduce((x, y) => x + y ** 2, 0) > b.reduce((x, y) => x + y ** 3, 0)
    ? true
    : false;
}

//  Jūratės sprendimas

function arrayMadness(a, b) {
  return (
    a.reduce((sum, num) => sum + num ** 2, 0) >
    b.reduce((sum, num) => sum + num ** 3, 0)
  );
}
