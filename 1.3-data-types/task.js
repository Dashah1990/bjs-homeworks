'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let input = [percent, contribution, amount, date];
    for (let i = 0; i < input.length - 1; i++) {
        if (!isNaN(input[i])) {
            input[i] = Number(input[i]);
            if (!isNaN(input[i])) {
                console.log(`Параметр содержит неправильное значение ${input[i]}`);
        }
        } 
    }
    let loanBody = amount - contribution;
    let month = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
    if ((date.getDate() - new Date().getDate()) > 0) {
        month ++;
    }
    percent = percent / 100 * 1 / 12;
    let pageseMujore = loanBody * (percent + percent / (((1 + percent) ** month) - 1));
    let totalAmount = pageseMujore * month;
    totalAmount = totalAmount.toFixed(2);
    console.log(parseFloat(totalAmount));
    parseFloat(totalAmount);
    return parseFloat(totalAmount);
}

function getGreeting(name) {
    if (!name) {
        name = "Аноним"
    }
    return `Привет, мир! Меня зовут ${name}`;
}