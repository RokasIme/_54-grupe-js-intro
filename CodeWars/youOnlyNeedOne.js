/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not. 
*/

function check(a, x) {
  return a.includes(x);
}

console.log(check([66, 101], 66));

// Jūratės sprendimas

function check(a, x) {
  return a.indexOf(x) > -1 ? true : false;
}
