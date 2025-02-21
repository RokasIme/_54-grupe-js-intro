/* Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1+7+12=20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
console.log(positiveSum([1, -4, 7, 12]));

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}

function positiveSum(arr) {
  var sum = 0;
  arr.forEach(function (v, i, a) {
    if (v > 0) {
      sum += v;
    }
  });
  return sum;
}

//  Jūratės sprendimas

function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}
