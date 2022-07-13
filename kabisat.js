const kabisat = (year) =>{
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 'Kabisat';
    } else {
        return 'Bukan Kabisat';
    }
}

console.log(kabisat(1900));
console.log(kabisat(2000));
console.log(kabisat(2001));
console.log(kabisat(2016));