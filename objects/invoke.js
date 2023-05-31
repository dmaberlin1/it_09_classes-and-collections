/**

 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

 const invoke = (object, path, func, args) => {
    // Разделяем путь на отдельные ключи
    const keys = path.split('.');

    // Проходим по каждому ключу в пути
    let current = object;
    for (const key of keys) {
        current = current[key];

        // Если текущий объект не существует или не является объектом, возвращаем null
        if (!current || typeof current !== 'object') {
            return null;
        }
    }

    // Проверяем, что текущий объект является массивом и метод существует
    if (Array.isArray(current) && current[func]) {

        return current[func].apply(current, args);
        //Метод apply является встроенным методом JavaScript для функций. Он позволяет вызывать функцию с указанным контекстом и списком аргументов, представленным в виде массива.
    }

    return null;
};

const data = {a: {b: [1, 2, 3]}}
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]
