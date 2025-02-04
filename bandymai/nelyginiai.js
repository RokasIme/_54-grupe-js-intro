function oddCount(n){
let i = 1;
let count = 0;
while (i <= n) {
    if (i%2 == 0) {
        count++;
    }
    i++;
}
return count;

}
const rez = oddCount(6);
console.log(rez)