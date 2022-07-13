const filmRating = (age) => {
    if(age >= 21){
        return 'DEWASA'
    }else if(age >= 13){
        return 'REMAJA'
    }else if(age >= 9){
        return 'BIMBINGAN ORANG TUA'
    }else{
        return 'SEMUA USIA'
    }
}

console.log(filmRating(15))
console.log(filmRating(32))
