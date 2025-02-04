// Užduotis: Ką grąžins ši funkcija su pateiktais pavyzdžiais?
// Parašykite atsakymus šalia kiekvieno pavyzdžio

function processNumber(num) {
    if (num < 5) {
        return num * 3;
    } else if (num >= 5 && num < 15) {
        return num + 7;
    } else {
        let result = num - 4;
        return result * 2;
    }
}
 
// Pavyzdžiai:
console.log(processNumber(3)); // 9
console.log(processNumber(10)); // 17
console.log(processNumber(7)); // 14
console.log(processNumber(15)); // 22
console.log(processNumber(1)); // 3
console.log(processNumber(20)); // 32