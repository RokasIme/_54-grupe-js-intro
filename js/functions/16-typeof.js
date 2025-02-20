console.log(typeof 4, typeof 0, typeof -7, typeof 3.14); // number
console.log(typeof NaN, typeof Infinity, typeof -Infinity); // number
console.log(typeof "", typeof "asd"); // string
console.log(typeof true, typeof false); // boolean
console.log(typeof undefined); //undefined

console.log(typeof null); //object
console.log(typeof {}, typeof { name: "Jonas" }); //object
console.log(typeof [], typeof [4]); //object

const a = null;
if (a === null) {
  console.log("yes: null");
}

const b = {};
if (a === {}) {
  console.log("yes: {}"); // skirtingi adresai, false (reference)
}

const c = [];
if (c === []) {
  console.log("yes: []");
}

const d = [];
const e = d;

if (d === e) {
  console.log("yes: [] adresai tie patys");
}

if (Array.isArray(5)) {
  console.log("yes: array");
}

if (Array.isArray([])) {
  // atpažysta tik laužtinius skliaustus
  console.log("yes: array");
}

// Ar tai objektas su {}

function IsTrueObject(data) {
  if (typeof data !== "object") {
    return false;
  }
  if (data === null) {
    return false;
  }
  if (Array.isArray(data)) {
    return false;
  } else {
  }
  {
  }
  return true;
}

function isTrueObject2(data) {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return false;
  }

  return true;
}

function isTrueObject3(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}

const g = null;
if (g === null) {
  console.log("null???");
}
