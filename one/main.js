// const name = 'Артём'
// const age = 26
// const skill = null
// const admin = true
// console.log(name, age, skill, admin)

// const obj = {
//     greet: function (name) {
//         return `Hello "${name}"`;
//     }
// };

// // вызов метода и вывод результата
// console.log(obj.greet('Артём'));

// const people = [
//     { name: 'Алексей', isAdmin: false },
//     { name: 'Ваня', isAdmin: true },
//     { name: 'Тёма', isAdmin: true },
//     { name: 'Зомби', isAdmin: false },
//     { name: 'Вампир', isAdmin: true },
//     { name: 'Орк', isAdmin: false },
// ];

// const adminNames = []; // массив для хранения имен админов

// for (let i = 0; i < people.length; i++) {
//     if (people[i].isAdmin) {
//         // если пользователь — админ, добавляем его имя в массив
//         adminNames.push(people[i].name);
//     }
// }

// // выводим всех админов через запятую
// console.log('Админы: ' + adminNames.join(', '));
const btn = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const body = document.body;


const openModal = () => {
    modal.classList.add('modal--open');
    body.classList.add('body--fixed');
};


const closeModal = () => {
    modal.classList.remove('modal--open');
    body.classList.remove('body--fixed');
};


btn.addEventListener('click', openModal);


modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target && (target.classList.contains('modal') || target.classList.contains('modal__close-btn'))) {
        closeModal();
    }
});


document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal();
    }
});