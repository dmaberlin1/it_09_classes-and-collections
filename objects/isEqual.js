/**

 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObject - объект с примитивами
 * @param {Object<string | number>} secondObject - объект с примитивами
 * @returns {boolean}
 */

const isEqual = (firstObject, secondObject) => {
    // Проверяем каждый ключ в первом объекте
    for (let key in firstObject) {
        // Если значение текущего ключа в первом объекте отличается от значения во втором объекте, возвращаем false
        if (firstObject[key] !== secondObject[key]) {
            return false;
        }
    }
    // Проверяем каждый ключ во втором объекте
    for (let key in secondObject) {
        // Если значение текущего ключа во втором объекте отличается от значения в первом объекте, возвращаем false
        if (firstObject[key] !== secondObject[key]) {
            return false;
        }
    }
        // Если значения всех ключей совпадают, возвращаем true
    return true;
};

const data = {a: 1, b: 1};
const data2 = {a: 1, b: 1};
const data3 = {a: 1, b: 2};
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
