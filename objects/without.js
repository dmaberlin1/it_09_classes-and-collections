/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const without = (object, ...args) => {
    // Преобразуем объект в массив пар ключ-значение
    const entries = Object.entries(object);
    console.log(entries)

    // Фильтруем массив пар ключ-значение на основе наличия ключа в списке args
    const filteredEntries = entries.filter(([key, value]) => !args.includes(key));

    // Преобразуем отфильтрованный массив пар ключ-значение обратно в объект
    return Object.fromEntries(filteredEntries);
};

const data = {a: 1, b: 2, c: 3};
console.log(without(data, 'b', 'c')); // { a: 1 }
