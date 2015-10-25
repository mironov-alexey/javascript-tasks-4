'use strict';

// Подключаем телефонную книгу друзей
var faceBook = require('./faceBook.js');

// Подключаем волшебный итератор по книге
var iterator = require('./iterator');

// Собираем друзей на свадьбу
//  faceBook – книга
//  Cергей - ищем с себя, то есть начиная со своих друзей
//  3 – максимальное кол-во рукопожатий до человека
var friends = iterator.get(faceBook, 'Сергей', 3);

// И отдельно парней на мальчишник
var dudes = iterator.get(faceBook, 'Сергей');

// Звоним одному
// .next() возращает JSON с именем и телефоном следующего ближайшего друга
//console.log(friends.next()); // { name: 'Васян', phone: '+70000000000' }

// Второму

//console.log(friends.next());
//console.log(friends.prev());
//console.log(friends.next());
//console.log(friends.next());
//console.log(friends.next());

//console.log(friends.next()); // { name: 'Полина', phone: '+70000000000' }
//console.log(friends.next()); // { name: 'Полина', phone: '+70000000000' }
//console.log(friends.prev()); // { name: 'Полина', phone: '+70000000000' }
//console.log(friends.prev()); // { name: 'Полина', phone: '+70000000000' }
//console.log(friends.prev()); // { name: 'Полина', phone: '+70000000000' }
//console.log(friends.next()); // { name: 'Полина', phone: '+70000000000' }
//console.log(friends.next()); // { name: 'Полина', phone: '+70000000000' }
//console.log(friends.next()); // { name: 'Полина', phone: '+70000000000' }

// Параллельно собираем друзей и приглашаем к 7 часам в Grizzly Bar
// .nextMale() возращает JSON с именем и телефоном, но только ближайшего парня
console.log(dudes.nextMale()); // { name: 'Васян', phone: '+70000000000' }
//
//friends.next(); // { name: 'Леонид', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Леонид', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Веня', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Веня', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Веня', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Веня', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Веня', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Веня', phone: '+70000000000' }
console.log(dudes.nextMale()); // { name: 'Веня', phone: '+70000000000' }
//console.log(dudes.prevMale()); // { name: 'Леонид', phone: '+70000000000' }
//console.log(dudes.prevMale()); // { name: 'Васян', phone: '+70000000000' }
//console.log(dudes.prevMale()); // { name: 'Васян', phone: '+70000000000' }
//
//// Есть чувак, который всё время опаздывает, позвоним ему сразу
console.log(dudes.next('Пётр')); // { name: 'Пётр', phone: '+70000000000' }

/**
 * Задача со звёдочкой:
 *  1. Раскомментировать строчку кода ниже (удаление Полины из книги)
 *  2. Всё должно работать правильно
 *
 *  Сложность задачи заключается в том, что при вызове `dudes.prevMale()`
 *  должен вернуться Леонид, а не Олег. Так как с Олегом у Сергея связь потеряется
 */
//delete faceBook['Полина']; // Удаляем Полину из книги, так как она переехала в Венецию

// Так и есть, переносим всё на 8 часов. Идём обратно, чтобы всех предупредить
// .prevMale() возращает JSON с именем и телефоном, но только предыдущего парня
//dudes.prevMale(); // { name: 'Олег Олегыч', phone: '+70000000000' }
//dudes.prevMale(); // { name: 'Дарья (Пиратка)', phone: '+70000000000' }

// Вообще предупредим всех до самого начала
//while (dudes.prevMale()) {}
//
//// Возвращаемся к Петру
//dudes.next('Пётр');
//
//// И продолжаем набор на мальчишник и свадьбу
//while (dudes.nextMale() || friends.next()) {}
