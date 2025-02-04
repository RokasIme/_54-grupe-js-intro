// Užduotis: Ką grąžins ši funkcija su pateiktais pavyzdžiais?
// Parašykite atsakymus šalia kiekvieno pavyzdžio
 
function processNumber(num) {
    if (num < 10) {
        return num * 2;
    } else {
        let result = num + 5;
        return result;
    }
}

// Pavyzdžiai:
console.log(processNumber(3)); // 6
console.log(processNumber(10)); // 15
console.log(processNumber(7)); // 14
console.log(processNumber(15)); // 20
console.log(processNumber(1)); // 2