function sum(start, finish) {
  //   let result = 0;

  //   for (let i = start; i <= finish; i++) {
  //     result += i;
  //   }

  //   veikia labai neefektyviai su daug operacijų
  //   return result;

  // veikia tik nuo 0
  //   return (finish * (finish + 1)) / 2;

  // +1 nes padedame nuo 0 (skaičiuojame augančio trikampio plotą) visada ziurim kaip į trikampį. jei nuo minuso tai skaiciuojam minusinį trikampį ir sudedame su pliusiiniu trikampiu. Jei nuo + kazkiek skaičiuojame nuo 0 iki pradinio skaiciaus ir atimame ji iš trikampio ploto nuo 0 iki didžiojo skaičiaus.

  // veikia su visom riekšmėm
  return (finish * (finish + 1) - start * (start - 1)) / 2;
}

console.log(sum(0, 0));
console.log(sum(0, 4));
console.log(sum(4, 0));
console.log(sum(0, 100));
console.log(sum(574, 815));
console.log(sum(-50, 50));
console.log(sum(-70, 30));
console.log(sum(70, -30));
console.log(sum(30, 30));
console.log(sum(-30, -30));
console.log(1, sum(0, 100_000_000));
console.log(2, sum(0, 1_000_000_000)); // skaičiuoja ilgai ir jau nebe tiksliai
