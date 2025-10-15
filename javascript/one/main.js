
// Создаем объект с описанием
const me = {
    name: 'Артём',
    age: 26,
    profession: 'Разработчик',
    greet: function (name) {
        return `Hello "${name}"`;
    }
};

// Использование метода объекта
console.log(me.greet('Мир')); // Выводит: Hello "Мир"

// Создаем массив пользователей
const users = [
    { name: 'Алексей', role: 'user' },
    { name: 'Михаил', role: 'admin' },
    { name: 'Светлана', role: 'user' },
    { name: 'Олег', role: 'user' },
    { name: 'Елена', role: 'admin' }
];

// Переменная для подсчета простых пользователей
let simpleUserCount = 0;

// Проходим по массиву и считаем неадминов
for (let i = 0; i < users.length; i++) {
    if (users[i].role !== 'admin') {
        simpleUserCount++;
    }
}

console.log('Количество простых пользователей:', simpleUserCount);