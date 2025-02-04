console.log(true && false);
console.log(true || false);
console.log(false || (true && false));
console.log((5 > 3) && (10 < 20));
console.log((5 > 10) || (10 > 5));
console.log(!true);
console.log(!(5 > 3));
console.log(!(false || true));
console.log(!(10 < 5 && 5 > 2));

/*
atsakymai:
1. false
2. true
3. false
4. true
5. true
6. false
7. false
8. false
9. true
*/


/*
Sudėtingesnis. Write a function that checks if a number is both greater than 10 and less than 100.
*/
function skaicius(num) {
    if (num > 10 && num < 100) {
        return true;
    } else if (num <= 10 || num >=100 ) {
        return false;
        }
      
}
console.log(skaicius(50)); // true
console.log(skaicius(8));  // false
console.log(skaicius(150)); // false