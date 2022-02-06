'use strict';
let lang = prompt("Выберите язык отображение: 'ru' или 'en'");
let langSwitch = prompt("Выберите язык отображение: 'ru' или 'en'");
const daysRu = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
var d = new Date();
var n = d.getDay();

const daysEn = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
let date = new Date();
let day = d.getDay();

if (lang == "ru") {
    console.log(daysRu[n]);
} else if(lang == "en") {
    console.log(daysEn[n]);
} else {
    console.log(lang = "error");
}
switch (langSwitch) {
    case "ru":
        console.log(daysRu[n]);
        break;
    case "en":
        console.log(daysEn[n]);
        break;
}
