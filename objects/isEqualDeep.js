/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
 const isEqualDeep = (firstObj, secondObj) => {
    // Проверка на тип объекта
    if (typeof firstObj !== 'object' || typeof secondObj !== 'object' || firstObj === null || secondObj === null) {
        return firstObj === secondObj;
    }

    // Получение ключей объектов
    const keysA = Object.keys(firstObj);
    const keysB = Object.keys(secondObj);
    console.log(keysA)
    console.log(keysB)
    // Проверка на количество свойств
    if (keysA.length !== keysB.length) {
        return false;
    }

    // Проверка на идентичность свойств
    for (let key of keysA) {
        if (!isEqualDeep(firstObj[key], secondObj[key])) {
            return false;
        }
    }
    //В каждой итерации цикла, для каждого ключа key из keysA (который содержит ключи объекта firstObj), вызывается рекурсивный вызов функции isEqualDeep. Это позволяет сравнивать значения свойств двух объектов, которые соответствуют одному и тому же ключу.

    return true;
};
const data = {a: 1, b: {c: 1}};
const data2 = {a: 1, b: {c: 1}};
const data3 = {a: 1, b: {c: 2}};
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
