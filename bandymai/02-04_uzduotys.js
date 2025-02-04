/*


*/


/* 1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą: "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias? */

function pazymys(num) {
    let balas = 0;
    
    if (num <=10 && num > 8) {
        balas = num + ' Labai gerai';
    } else if (num <= 8 && num > 6) {
        balas = num  + ' Gerai';
    } else if (num <=6 && num > 4) {
        balas = num + ' Patenkinamai';
    } else if (num <= 4 && num >= 1) {
        balas = num + ' Nepatenkinamai';
    } else {balas = 'Netinkamai įvestas skaičius'}


return balas;
}

const vertinimas1 = pazymys(3); // 3 Nepatenkinamai
const vertinimas2 = pazymys(5); // 5 Patenkinamai
const vertinimas3 = pazymys(7); // 7 Gerai
const vertinimas4 = pazymys(10); // 10 Labai gerai
const vertinimas5 = pazymys(13); //Netinkamai įvestas skaičius

console.log('Pirma užduotis')
console.log(vertinimas1);
console.log(vertinimas2);
console.log(vertinimas3);
console.log(vertinimas4);
console.log(vertinimas5);


/*. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias? */

function amzius(num) {
    if (num >= 18){
        return 'Gali balsuoti';
 } else {
        return 'Negali balsuoti'
    }
}

console.log('');
console.log('Antra užduotis');
 console.log(amzius(9)); // Negali balsuoti
 console.log(amzius(19)); // Gali balsuoti
 
 /* 3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.Kurį metodą čia patartumėte naudoti? */


function pavadinimas(diena) {
 
    if (diena == 1) {
        return 'Pirmadienis';
    } else if (diena == 2) {
        return 'Antradienis';
    } else if (diena == 3) {
        return 'Trečiadienis';
    } else if (diena == 4) {
        return 'Ketvirtadienis';
    } else if (diena == 5) {
        return 'Penktadienis';
    } else if (diena == 6) {
        return 'Šeštadienis';
    } else if (diena == 7) {
        return 'Sekmadienis';
    } else {
        return 'Neteisingai įvestas skaičius'
    }
    }

console.log('');
console.log('Trečia užduotis');
console.log(pavadinimas(1)); // Pirmadienis
console.log(pavadinimas(2)); // Antradienis
console.log(pavadinimas(3)); // Trečiadienis
console.log(pavadinimas(4)); // Ketvirtadienis
console.log(pavadinimas(5)); // Penktadienis
console.log(pavadinimas(6)); // Šeštadienis
console.log(pavadinimas(7)); // Sekmadienis
console.log(pavadinimas(8));

/*4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti? */

function skaicius(num) {
    if ( num < 0) {
        return 'Skaičius neigiamas';
    } else if (num == 0) {
        return 'Skaičius lygus nuliui';
    } else if (num > 0) {
        return 'Skaičius teigiamas'
    }
}

console.log('')
console.log('Ketvirta užduotis')
console.log(skaicius(-3)); // Skaičius neigiamas
console.log(skaicius(0)); // Skaičius lygus nuliui
console.log(skaicius(5)); // Skaičius teigiamas

/*5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių: "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui? */

function grupe(amzius) {

    if (amzius >= 13 && amzius <= 19) {
        return 'Jaunuolis'
    } else if (amzius >= 20 && amzius <= 64) {
        return 'Suaugęs'
    } else if ( amzius >= 65) {
        return 'Pensininkas'
    }

}

console.log('')
console.log('Penkta užduotis')
console.log(grupe(13)); // Jaunuolis
console.log(grupe(16)); // Jaunuolis
console.log(grupe(21)); // Suaugęs
console.log(grupe(30)); // Suaugęs
console.log(grupe(70)); // Pensininkas

/* 6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias? */

function lyginis(num) {
    if (num % 2 === 0) {
        return 'Skaičius lyginis'
    } else {
        return 'Skaičius nelyginis'
    }
}

console.log('')
console.log('Šešta užduotis')
console.log(lyginis(5)); // Skaičius nelyginis
console.log(lyginis(3)); // Skaičius nelyginis
console.log(lyginis(8)); // Skaičius lyginis