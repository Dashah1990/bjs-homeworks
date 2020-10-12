function parseCount(number) {
    let parsingResult = Number.parseInt(number);
    if (isNaN(parsingResult)) {
        throw new Error('Невалидное значение');
    }
    return parsingResult; 

}

function validateCount(number) {
    try {return parseCount(number);
    } catch (parseCountError) {
        return parseCountError;
    }
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b < c) || (a + c < b) || (c + b < a)) { //проверяю существует ли треугольник с такими сторонами
            throw new Error('Треугольник с такими сторонами не существует');
        } 
    }

    getPerimeter() { //рассчитываю периметр
        return (this.a + this.b + this.c);
    }

    getArea() { 
        let p = this.getPerimeter()/2; //полупериметр
        let squere = Math.sqrt (p * (p - this.a) * (p - this.b) * (p - this.c));  //расчет площади формулой Герона
        return (Math.round(squere * 1000)) / 1000; // округление до 2 знаков после запятой
    } 
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) { //перехватываю исключения
            let objectException = {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        };
        return objectException;
    }
}  


