/**
 * Parašykite funkciją, kuri apskaičiuoja skaičiaus faktorialą.
 *
 * Pvz. faktorialas(5) -> 120
 */

/**
 * Parašykite funkciją, kuri patikrina ar string'as yra palindromas.
 *
 * Pvz. arPalindromas("level") -> true, arPalindromas("hello") -> false
 */

/**
 * Sukurkite funkciją, kuri priima masyvą skaičių ir grąžiną antrą didžiausią skaičių.
 *
 * Pvz. antrasDidziausias([10, 5, 8, 20]) -> 10
 */

/**
 * Parašykite funkciją, kuri sugeneruoja atsitiktinį slaptažodį iš didžiųjų, mažųjų raidžių ir skaičių.
 *
 * Pvz. generuotiSlaptazodi(8) -> "aB3dE5kL"
 */

/**
 * Parašykite funkciją, kuri tikrina ar skaičius yra Fibonačio skaičius.
 *
 * Pvz. arFibonacio(8) → true, arFibonacio(10) → false
 */

/**
 * Parašykite funkciją, kuri iš teksto pašalina visus skaičius.
 *
 * Pvz. beSkaiciu("Labas rytas, Lietuva 2025!") → "Labas rytas, Lietuva!"
 */

/**
 * Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina visus unikalius skaičius (pašalina pasikartojančius).
 *
 * Pvz., unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]
 */

/**
 * Parašykite funkciją, kuri skaičiuoja, kiek kartų kiekviena raidė pasikartoja string‘e ir grąžina objektą.
 *
 * Pvz., skaiciuotiRaidesObj("banana") → { b: 1, a: 3, n: 2 }
 */

/**
 * Sukurkite funkciją, kuri patikrina, ar du string‘ai yra anagramos (turi tas pačias raides, tik kita tvarka).
 *
 * Pvz., arAnagrama("listen", "silent") → true, arAnagrama("hello", "world") → false
 */

/**
 * Raskite klaidą ir ištaisykite funkciją, kad ji pakeistų tiek didžiąsias, tiek mažąsias "a" į "@".
 */

const keistiRaide = (string) => string.replaceAll("a" || "A", "@");

console.log(keistiRaide("Banana"));
console.log(keistiRaide("Ananasas"));
