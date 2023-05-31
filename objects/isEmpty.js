/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

const isEmpty = (object) => {
    return Object.keys(object).every((key) => {
        const value = object[key];
        return value === '' || value === null || Number.isNaN(value) || value === undefined;
    });
};

const data = {a: 1, b: undefined};
const data2 = {a: undefined};
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

