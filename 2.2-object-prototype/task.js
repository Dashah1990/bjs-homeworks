String.prototype.isPalindrome = function isPalindrome() {
    let array = this.toUpperCase().split(''); // приводим к нижнему регистру и переводим строку в массив
    for (let i = 0; i < array.length; i++) {  // удаляем пробелы
        if (array[i] === ' ') {
            array.splice(i, 1);
        }
    }
    if (array.join('') === array.reverse('').join('')){ //переводим массив обратно в строку и ставниваем элементы с начала и с конца
        return (true);
    } else return (false);
}


function getAverageMark(marks) {
    let sum = 0;
    if (marks.length === 0) {
        return 0; // если нет оценок то вернет среднюю = 0
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    let dateOfBirth = new Date(birthday);
    birthday = dateOfBirth.getTime();
    let diff = now - birthday;
    let age = diff / (365.25 * 24 * 60 *60 *1000);
    if (age > 18) {
        return true;
    } else false;
}