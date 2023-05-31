/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 ({a: {b: 1}}); =>false
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {
    if (typeof object !== 'object' || object === null) {
        // Если объект не является объектом или равен null, считаем его пустым
        return true;
    }

    for (let key in object) {
        if (typeof object[key] === 'object' && object[key] !== null) {
            // Рекурсивно проверяем пустоту вложенного объекта
            if (!isEmptyDeep(object[key])) {
                return false;
            }
        } else {
            // Если свойство не является объектом или массивом,
            // и его значение не пустое, объект не считается пустым
            if (object[key] !== '' && object[key] !== null && !Number.isNaN(object[key]) && object[key] !== undefined) {
                return false;
            }
        }
    }

    return true;
};


const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
