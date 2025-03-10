function howManySmaller(arr, n) {
  let newArr = arr.map((x) => x.toFixed(2));

  return newArr.filter((num) => num < n).length;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2);

console.log("--------");
/*Task
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java"
*/

function cutIt(arr) {
  return arr.map((a) => a.slice(0, Math.min(...arr.map((a) => a.length))));
}

console.log(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"]);
console.log(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"]);
