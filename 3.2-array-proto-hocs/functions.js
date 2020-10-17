console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
console.log(weapons);

function getNames () {
    return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons (initDurability) {
    return weapons.filter(weapon => weapon.initDurability > initDurability).length;
}

function hasReliableWeapons (initDurability) {
    return weapons.some(weapon => weapon.initDurability > initDurability);
}

function getTotalDamage () {
    return weapons.reduce((sum, weapon) => {
        return sum + weapon.getDamage();
    }, 0);
}

function getReliableWeaponsNames (initDurability) {
    return weapons
    .filter(weapon => weapon.initDurability > initDurability)
    .map(weapon => weapon.name);
}


//Задача 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) { //сравнение двух массивов
    return (arr1.every((arr, i) => arr === arr2[i]) && arr1.length === arr2.length);
}

function memorize(func, limit) {
    const memory = [];
    return function(...args) {
        const foundObject = memory.find(mem => compareArrays(mem.argss, args));
        if (foundObject) {
            return foundObject.result;
        } 
        const result = func(...args);
        memory.push({argss: args, result: result});
        if (memory.length > limit) {
            memory.shift();
        }
        return result;
    }
}
