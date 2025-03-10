/* The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4
*/

function hotpo(n) {
  if (n === 0) return 0;
  if (n === 1) {
    return 1;
  }

  let count = 0;
  let num = n;
  for (let i = 0; i < Infinity; i++) {
    if (num === 1) break;
    if (num % 2 === 0) {
      num = num / 2;
      count++;
    }
    if (num === 1) break;
    if (num % 2 !== 0) {
      num = 3 * num + 1;
      count++;
    }
  }
  return count;
}

console.log(hotpo(1), 1);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);

let hotpo1 = function (n) {
  let count = 0;
  if (n < 2) {
    return 0;
  }
  while (n > 1) {
    if (n % 2) {
      n = n * 3 + 1;
    } else {
      n /= 2;
    }
    count++;
  }
  return count;
};
