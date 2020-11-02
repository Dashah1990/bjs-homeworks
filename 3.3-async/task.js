class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, fn, id) { //добавление будильника
        if (!id) {
            throw new Error('error text');
        }
        if (this.alarmCollection.find(alarm => alarm.id === id)) {
            return console.error('Будильник с таким id уже существует')
        }
        this.alarmCollection.push({id, time, fn});
    }

    removeClock(id) { //удаление
        let index = this.alarmCollection.findIndex(alarm => alarm.id === id);
        if (index === -1) {
            return false
        } else {
            this.alarmCollection.splice(index,1);
            return true;
        }
    }

    getCurrentFormattedTime = () => //возвращает текущее время
        new Date().toLocaleTimeString().slice(0,-3);
    

    start() { //запускает все звонки
        let checkClock = (alarm) => {if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.fn()}
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000); 
        }        
    }

    printAlarms() { //печатает все звонки
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((alarm) => console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`));
    }

    stop() { //останавливает выполнение всех звонков
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms() { //удаляет все звонки
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('17:44', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('17:49', () => {console.log('Давай вставай уже!'); phoneAlarm.removeClock(2)}, 2);
//phoneAlarm.addClock('09:01', () => console.log('Иди умываться'));
phoneAlarm.addClock('17:50', () => {
    console.log('Вставай, а то проспишь!');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
 }, 3);
//phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь'), 1);
console.log(phoneAlarm.getCurrentFormattedTime());
phoneAlarm.printAlarms();
phoneAlarm.start();
console.log(phoneAlarm.removeClock(1));
phoneAlarm.printAlarms();
