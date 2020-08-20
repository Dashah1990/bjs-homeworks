'use strict';
function getResult(a,b,c){
    let discriminant = b ** 2 - 4 * a * c;
    let x =[];
    if (discriminant < 0) {
        return x;
    } else if (discriminant === 0) {
        let x1 = (-b) / 2 * a; 
        x.push(x1);
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / 2 * a; 
        let x2 = (-b - Math.sqrt(discriminant)) / 2 * a;
        x.push(x1, x2);
    }
    return x;
}

function getAverageMark(marks){
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        marks = marks.slice(0, 5);
        console.log = ("Оценок больше 5, расчет средней будет произведен по первым пяти оценкам");
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    const year = new Date().getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    let result;
    if (age > 18) {
        result = (`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        result = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
    return result;
}