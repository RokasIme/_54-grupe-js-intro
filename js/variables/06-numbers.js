/*
Numbers

- sveikieji, dešimtainiai
- teigiami, neigiami
- infinity, NaN (skaičiaus tipo klaida)
- 
*/

const n1 = 1;
console.log(n1); 

const n2 = -5;
console.log(n2);

const n3 = 3.14;
console.log(n3); 

const n4 = -2.727;
console.log(n4);

const n5 = Infinity;
console.log(n5);

const n6 = -Infinity;
console.log(n6);

const n7 = -9999999999;
console.log(n7);

const n8 = NaN;
console.log(n8);

// 'labas rytas' / 2 = NaN

console.log('Labas' * 2);

console.log('Labas' + 2);  // + sujungia operacijas ir priima kaip string (tekstą)

console.log(7 / 5);
console.log(7 - 5);
console.log(7 % 5);
console.log(7 + 5);
console.log(7 * 5);
console.log(7 ** 5); // dviguba žvaigždė kelia laipsniu

console.clear();

// Math - Matematinių funkcijų "biblioteka"

// Matematinės konstantos

console.log(Math.E);
console.log(Math.PI);

// Math.abs

console.log(Math.abs(-5));
console.log(Math.abs(5));


// Triogonometrija 

console.log(Math.sin(30)); // sinusas skaičiuojamas Radianais
console.log(Math.cbrt(8)); // kubinė šaknis

// Apvalinimas
console.log('Ceil apvalina į viršų');
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.1));

console.log('Floor apvalina į viršų');
console.log(Math.floor(9.5));
console.log(Math.floor(9.1));

console.log('Round apvalina normaliai');
console.log(Math.round(9.5));
console.log(Math.round(9.1));
    
console.log('trunc "apvalina" numesdamas viską kas po kablelio');
console.log(Math.trunc(9.5));
console.log(Math.trunc(9.1));
console.log(Math.trunc(-9.1));
console.log(Math.trunc(-9.5));


