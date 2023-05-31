/**

 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObject - объект с примитивными значениями
 * @param {Object<string | number>} secondObject - объект с примитивными значениями
 * @returns {Object}
 */

 const intersection = (firstObject, secondObject) => {
    const intersectionObject = {};

    // Перебираем все ключи первого объекта
    for (const key in firstObject) {
        // Проверяем, есть ли такой же ключ во втором объекте
        if (secondObject.hasOwnProperty(key)) {
            // Если ключ присутствует в обоих объектах, добавляем его и значение в новый объект пересечений
            intersectionObject[key] = firstObject[key];
        }
    }

    return intersectionObject;
};

const data = {a: 1, b: 2};
const data2 = {c: 1, b: 2};
console.log(intersection(data, data2)); // { b: 2 }
