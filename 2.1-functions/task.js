'use strict';
function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return {D, roots: []}
    } else if (D === 0) {
        let x1 = -b / 2 * a;
        return {D, roots: [x1]}
    } else {
        let x1 = (-b + Math.sqrt(D)) / 2 * a; 
        let x2 = (-b - Math.sqrt(D)) / 2 * a;
        return {D, roots: [x1, x2]};
    }
}


function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c);
    console.log(result.roots[0]);
    console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2+${b}x+${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. x\u2081 = ${result.roots[0]}, x\u2082 = ${result.roots[1]}`);
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень x1 = ${result.roots[0]}`);
    } else console.log(`Уравнение не имеет вещественных корней`);
}

showSolutionsMessage(1, 10, 5)   ;

function getAverageScore(data) {
    let averageMarks = {};
    let numberOfItems = 0; //количество предметов
    for (let key in data) {
        let value = data[key];
        averageMarks[key] = getAverageMark(value);
        numberOfItems ++;
    }
    let average = 0;
    if (numberOfItems === 0) return {average: 0}; // если нет оценок то вернет среднюю = 0
    for (let key in averageMarks) {
        average += averageMarks[key];
    }
    average = average / numberOfItems;
    averageMarks.average = average;
    console.log(averageMarks);
    return averageMarks;

}

function getAverageMark(marks) {
    let sum = 0;
    if (marks.length === 0) {
        return 0; // если нет оценок то вернет среднюю = 0
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return (sum / marks.length);
}

getAverageScore({});

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго'
    } else return 'Эмильо'

}

console.log(getPersonData({aaa: 0, bbb: 1}));