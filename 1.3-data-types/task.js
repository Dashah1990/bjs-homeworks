'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let input = [percent, contribution, amount, date];
    if (isNaN(+percent)) {
        return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
    }
    if (isNaN(+contribution)) {
        return `Параметр <Сумма первоначального взноса> содержит неправильное значение <${contribution}>`;
    }
    if (isNaN(+amount)) {
        return `Параметр <Сумма кредита> содержит неправильное значение <${amount}>`;
    }
    if (isNaN(+date)) {
        return `Параметр <Дата окончания кредита> содержит неправильное значение <${date}>`;
    }
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
    return (`Привет, мир! Меня зовут ${name || "Аноним"}`);
}