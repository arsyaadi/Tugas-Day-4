const grade = (num) =>{
    if(num >= 90){
        return 'A'
    }else if(num >= 80 && num <= 89){
        return 'B'
    }else if(num >= 70 && num <= 79){
        return 'C'
    }else if(num >= 60 && num <= 69){
        return 'D'
    }else if(num <= 59){
        return 'E'
    }
}


console.log(grade(30))
console.log(grade(75))