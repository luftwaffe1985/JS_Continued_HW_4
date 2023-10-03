"use strict";

// Задание 1

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const checkboxEl = document.querySelector("input");
// const btnEl = document.querySelector("button");
// const divEl = document.querySelector("div");

// function showDiv(msg, color) {
//   divEl.textContent = msg;
//   divEl.style.color = color;
// }

// function handleSubmit() {
//   if (!checkboxEl.checked) {
//     showDiv("Необходимо согласиться с условиями", "red");
//   } else {
//     showDiv("Спасибо за согласие с условиями", "green");
//   }
// }

// btnEl.addEventListener("click", handleSubmit);

// Задание 2

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const checkTea = document.querySelector("input[value='tea']");
// const checkCoffee = document.querySelector("input[value='coffee']");
// const btnEl = document.querySelector("button");
// const divEl = document.querySelector("div");

// btnEl.addEventListener("click", function () {
//   if (checkTea.checked) {
//     alert("Чай закончился");
//   } else if (checkCoffee.checked) {
//     alert("Кофе закончился");
//   }
// });

// Задание 3

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const formEl = document.createElement("form");
// const inputPasswd = document.createElement("input");
// const btnEl = document.createElement("button");
// const btnShowPasswd = document.createElement("button");

// formEl.setAttribute("action", "#");
// inputPasswd.setAttribute("type", "password");
// btnEl.setAttribute("type", "submit");
// btnEl.textContent = "Отправить";
// btnShowPasswd.textContent = "Показать пароль";
// btnShowPasswd.hidden = true;

// document.body.append(formEl);
// formEl.append(inputPasswd);
// formEl.append(btnEl);
// formEl.append(btnShowPasswd);

// formEl.addEventListener("submit", function (event) {
//   event.preventDefault();
//   inputPasswd.setCustomValidity("");
//   if (inputPasswd.value.trim() === "пароль") {
//     inputPasswd.style.borderColor = "green";
//     // inputPasswd.setCustomValidity("пароль верный");
//     inputPasswd.value = "";
//   } else {
//     inputPasswd.style.borderColor = "red";
//     inputPasswd.setCustomValidity("пароль неверный");
//     inputPasswd.value = "";
//   }
//   inputPasswd.reportValidity();
// });

// inputPasswd.addEventListener("input", function (event) {
//   event.preventDefault();
//   inputPasswd.setCustomValidity("");
//   if (inputPasswd.value != "") {
//     btnShowPasswd.hidden = false;
//   } else {
//     btnShowPasswd.style.display = "inline-block";
//   }
// });

// btnShowPasswd.addEventListener("click", function (event) {
//   event.preventDefault();
//   const type =
//     inputPasswd.getAttribute("type") === "password" ? "text" : "password";
//   inputPasswd.setAttribute("type", type);
//   btnShowPasswd.textContent =
//     type === "password" ? "Показать пароль" : "Скрыть пароль";
// });

// Задание 4

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// const input = document.createElement("input");
// const h1 = document.createElement("h1");
// input.setAttribute("type", "text");
// document.body.append(input);

// input.addEventListener("input", function () {
//   h1.textContent = input.value;
//   input.after(h1);
// });
