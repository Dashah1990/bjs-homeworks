function parseCount(number) {
    if (isNaN(Number.parseInt(number))) {
        let parseCountError = new Error('Невалидное значение');
        throw parseCountError;
    }
    return Number.parseInt(number); 

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
        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) { //проверяю существует ли треугольник с такими сторонами
            let triangleError = new Error('Треугольник с такими сторонами не существует');
            throw triangleError;
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
        const newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch (triangleError) { //пытаюсь перехватить исключение и вернуть объект с двумя методами getArea и getPerimeter, 
        // которые возвращают строку: "Ошибка! Треугольник не существует". Но не совсем понимаю как это сделать.
        let objectException = {
            getArea: function() {
                return ("Ошибка! Треугольник не существует");
            },
            getPerimetr: function() {
                return ("Ошибка! Треугольник не существует");
            }
        }
        return objectException;
        
    }
}  



getTriangle(2, 5, 1);

