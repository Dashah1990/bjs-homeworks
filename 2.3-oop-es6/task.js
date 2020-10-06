//Задача 1

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = 1.5 * this._state;
        return  this.state;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'detective';
    }
}

//Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            for (let prop in this.books[i]) {
                if (prop === type && this.books[i][prop] === value) {
                    return this.books[i];
                }
            }
        }
        return null;    
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let bookRequested = this.books[i];
                this.books.splice(i,1);
                return bookRequested;

            }
        }
        return null;
    }
}

//Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.magazine = {};
    }

    getName(name) {
        this._name = this.name;
        return this._name;
    }

    addGrade(grade, subject) {
        this.subject = subject;
        this.grade = grade;
        if (this.subject in this.magazine) { //если такой предмет уже есть в журнале
            if (this.grade >=1  && this.grade <= 5) { //если оценка от 1 до 5
                this.magazine[subject].push(grade); // то добавляем оценку в журнал
                return this.magazine[subject].length; //возвращаем общее количество оценок по предмету
            } else return this.magazine[subject].length;
        } else if (this.grade >=1  && this.grade <= 5) { //если такого предмета нет в журнале
            this.magazine[subject] = []; // добавляем его в журнал
            this.magazine[subject].push(grade);
            return 1;
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return 0;
        }           
    }

    getAverageBySubject(subject) { //рассчитываем среднюю по предмету
        this.subject = subject;
        let sum = 0;
        if (this.subject in this.magazine) { 
            for (let i = 0; i < this.magazine[subject].length; i++) { 
                sum = sum + this.magazine[subject][i]
            }
            return sum / this.magazine[subject].length;
        } else return 0;
    }

    getTotalAverage() { //рассчитываем среднюю по всем предметам
        let sum = 0;
        let numberItems = 0;
        console.log(this.magazine);
        for (let prop in this.magazine) { //перебираем все элементы в объекте 
            for (let j = 0; j < this.magazine[prop].length; j++) { // перебираем элементы массива - оценки
                sum = sum + this.magazine[prop][j];
                numberItems++;
            }
        }
        return sum / numberItems;
    }
}
