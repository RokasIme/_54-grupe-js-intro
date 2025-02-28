function sumIntervals(intervals) {
  let suma = 0;
  for (let i = 0; i < intervals.length; i++) {
    suma += Math.abs(intervals[i][0] - intervals[i][1]);
  }

  return suma;
}

console.log(
  sumIntervals([
    [1, 5],
    [6, 10],
  ])
);

function giveMeFive(obj) {
  let newArr = [];
  for (const key in obj) {
    if (key.length === 5) {
      newArr.push(key);
    }
    if (obj[key].length === 5) {
      newArr.push(obj[key]);
    }
  }
  return newArr;
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }), [
  "earth",
  "world",
]);

function showObjectKeys(obj) {
  for (var key in obj) {
    console.log(key);
  }
}
function showObjectValues(obj) {
  for (var key in obj) {
    console.log(obj[key]);
  }
}
var ob = { item1: "This", item2: "is", item3: "an", item4: "example" };
console.log("keys of ob:");
showObjectKeys(ob);
console.log("values of ob:");
