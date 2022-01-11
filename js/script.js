/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

// const img = document.querySelectorAll(".promo__adv");
const img = document.querySelectorAll(".promo__adv img");
const adv_tit = document.querySelectorAll(".promo__adv-title ");
//   imgs = item.querySelectorAll(".img");
adv_tit[0].remove();
img.forEach((item) => {
  item.remove();
});
// обычная функция
// img.forEach(function(item){
//   item.remove();
// });
const poster = document.querySelector(".promo__bg"),
  genre = poster.querySelector(".promo__genre"),
  movieList = document.querySelector(".promo__interactive-list");
genre.textContent = "Трагедия";
poster.style.backgroundImage = 'url("img/bg.jpg")';
// 3 task
// movieList.forEach((item) => {
//   item.remove();
// });

movieList.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>    
    `;
});
