/* 
🔹 Understanding the Pattern
From the test cases, we can see a relationship between:

The input sequence (e.g., ["run", "jump", "run", "jump", "run"])
The expected output format (e.g., "_|_|_", "x|x|x")
By examining patterns:

"run" seems to be represented as _
"jump" seems to be represented as x
Sequences of "run" and "jump" create mixed patterns
🔹 Identified Rules
First output (_|_|_) stays constant in all test cases.
Second output changes based on "jump" and "run" sequences:
All "run" → "_/_/_" (slashes / separate continuous runs)
All "jump" → "x|x|x" (pipe | separates jumps)
Alternating "run" and "jump" → "x/x/x" (slashes / separate jumps and runs)
"jump" followed by "run" (["jump", "run", "jump", "run", "jump"]) → "x/x/x"
*/

function testit(act) {
  let judesys = act;
  if (judesys[0] === "jump") {
    judesys[0] = "x";
  }
  if (judesys[0] === "run") {
    judesys[0] = "_";
  }
  if (judesys[1] === "jump") {
    judesys[1] = "|";
  }
  if (judesys[1] === "run") {
    judesys[1] = "/";
  }
  if (judesys[2] === "jump") {
    judesys[2] = "x";
  }
  if (judesys[2] === "run") {
    judesys[2] = "_";
  }
  if (judesys[3] === "jump") {
    judesys[3] = "|";
  }
  if (judesys[3] === "run") {
    judesys[3] = "/";
  }
  if (judesys[4] === "jump") {
    judesys[4] = "x";
  }
  if (judesys[4] === "run") {
    judesys[4] = "_";
  }
  judesys = judesys.join("");

  return judesys;
}

console.log(
  testit(["run", "jump", "run", "jump", "run"]),
  "_|_|_",
  "_|_|_",
  ""
);

console.log(testit(["run", "jump", "run", "run", "run"]), "_|_|_", "_|_/_", "");
console.log(testit(["run", "run", "run", "run", "run"]), "_|_|_", "_/_/_", "");
console.log(
  testit(["jump", "jump", "jump", "jump", "jump"]),
  "_|_|_",
  "x|x|x",
  ""
);
console.log(
  testit(["jump", "run", "jump", "run", "jump"]),
  "_|_|_",
  "x/x/x",
  ""
);
