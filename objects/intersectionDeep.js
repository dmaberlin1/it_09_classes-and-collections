/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    const intersectionObject = {};

    // Перебираем все ключи первого объекта
    for (const key in firstObject) {
        // Проверяем, есть ли такой же ключ во втором объекте
        if (secondObject.hasOwnProperty(key)) {
            // Проверяем, являются ли значения обоих ключей объектами
            if (typeof firstObject[key] === 'object' && typeof secondObject[key] === 'object') {
                // Рекурсивно вызываем функцию для вложенных объектов и добавляем результат в новый объект пересечений
                intersectionObject[key] = intersectionDeep(firstObject[key], secondObject[key]);
            } else {
                // Если значения не являются объектами, добавляем ключ и значение в новый объект пересечений
                intersectionObject[key] = firstObject[key];
            }
        }
    }

    return intersectionObject;
};

const data = {a: 1, b: {c: 3}};
const data2 = {c: 1, b: {c: 3}};
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
