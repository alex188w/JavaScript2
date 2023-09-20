
// Задание 1
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// 1.	Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// 2.	Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

// const div = document.querySelector('div');
// // или так
// const div1 = document.querySelector('#block');
// // console.log(div1);
// // или так для первого
// const div2 = document.querySelector('#block p:first-child');
// // console.log(div2);
// const p = div.querySelector('p');
// // или захват всех параграфов
// const p1 = div.querySelectorAll('p');
// console.log(p[0]);
// // вывести первый селектор из захваченных

// const p_www = document.querySelectorAll('.www');
// p_www.forEach((el) => console.log(el)); 
// // вывести все элементы p_www
// console.log(p_www[0]);
// // вывести первый

// Задание 2
// 1.	Дан тег <a class="link" href="#">link text html</a>
// a.	Вам необходимо поменять текст внутри ссылки на “link text js”
// b.	Заменить href, на значение https://developer.mozilla.org/ru/ 
// 2.	Дан тег <img class="photo" src="" alt=""> 
// a.	Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const link = document.querySelector('.link');
// // console.log(link);
// link.textContent = 'ink text js';
// link.href = 'https://developer.mozilla.org/ru/';
// // метасет Атрибут, если нет href
// link.setAttribute('href', 'https://developer.mozilla.org/ru/')
// console.log(link);
// const img = document.querySelector('img');
// img.src = 'https://images.unsplash.com/photo-1694676517357-25cd4d8f67f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80';
// img.width = 320;

// Задание 3
// 1.	Дан тег <div class="content"></div> 
// 2.	Создайте новый элемент p
// 3.	Добавьте в него текст “Новый текстовый элемент”
// 4.	Добавьте созданный элемент внутри <div class="content"></div>
// 5.	Удалите добавленный узел 

// const div = document.querySelector('.content');
// const p = document.createElement('p')
// p.textContent = "Новый текстовый элемент";
// div.appendChild(p);
// div.removeChild(p);

// Задание 4
// 1.	Создать элемент button, добавить в блок <div class="content"></div>
// 2.	При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку


// const div = document.querySelector('.content');
// const btn = document.createElement('button');
// btn.textContent = 'Нажми меня';
// div.appendChild(btn);

// let clickCount = 0;
// btn.onclick = function () {
//     clickCount++
//     console.log(`Количество ${clickCount}`);
// }

// const btnReset = document.createElement('button');
// btnReset.textContent = 'Сброс';
// div.appendChild(btnReset);
// btnReset.onclick = function () {
//     clickCount = 0;
//     console.log(`Сброс счетчика ${clickCount}`);
// }

// просмотреть свойство объекта (возможные методы для объекта)
// console.log(btnReset);

// Задание 5
// 3.	Дан тег <div class="content"></div> 
// 4.	Создайте с помощью javascript новый элемент button
// 5.	Добавьте текст для кнопки “Отправить”
// 6.	При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const div = document.querySelector('.content');
const btn = document.createElement('button');
div.appendChild(btn);
btn.textContent = 'Отправить';
// Возвращение текста Отправить через 1000 мс - 1 сек.
btn.onclick = function () {
    btn.textContent = 'Отправлено!';   
    setTimeout(() => {
        btn.textContent = 'Отправить';
    }, 1000)
}