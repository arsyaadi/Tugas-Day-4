const oddEvent = (num) =>{
    if(num % 2 === 0){
        return 'Genap'
    }else{
        return 'Ganjil'
    }
}

console.log(oddEvent(43))
console.log(oddEvent(1032))