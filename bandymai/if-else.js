// Užduotis: Ką grąžins ši funkcija su pateiktais pavyzdžiais?
// Parašykite atsakymus šalia kiekvieno pavyzdžio

function processNumber(num) {
    if (num < 5) {
        return num * 3;
    } else if (num >= 5 && num < 10) {
        return num + 7;
    } else if (num >= 10 && num < 20) {
        let result = num - 4;
        if (result % 2 === 0) {
            return result / 2;
        } else {
            return result * 3;
        }
    } else {
        return num % 3 === 0 ? num + 10 : num - 5;
    }
}

// Pavyzdžiai:
console.log(processNumber(3)); // 9
console.log(processNumber(10)); // 3
console.log(processNumber(7)); // 14
console.log(processNumber(15)); // 33
console.log(processNumber(1)); // 3
console.log(processNumber(20)); // 15
console.log(processNumber(25)); // 20
console.log(processNumber(30)); // 40