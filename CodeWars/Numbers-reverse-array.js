// atvirkštinė skaičių eilutė pateikta array
function digitize(n) {
  const text = n.toString();
  const sptext = text.split("");
  const revtext = sptext.reverse();
  const line = revtext.map(Number);
  return line;
}
console.log(digitize(12345));
