/*
Sudėtingesnis. Write a function that takes age and hasLicense as arguments and returns:
"Can drive" if the person is 18 or older AND has a license
"Cannot drive" otherwise
*/

function vairuoti(amzius, hasLicence) {
    if (amzius >= 18 && hasLicence === true ) {
        return 'Can drive';
    } else  {
        return 'Cannot drive';
    }
}
console.log(vairuoti(19, false));
console.log(vairuoti(17, false));
console.log(vairuoti(20, true));
console.log(vairuoti(17, true));

/*
Cannot drive
Cannot drive
Can drive
Cannot drive
*/