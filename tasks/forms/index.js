"use strict";
let submitEmail = null;
let submitComment = null;
let commonData = new FormData();
const formEmail = document.querySelector('#email');
const formComment = document.querySelector('#comment');
if (formEmail)
    formEmail.addEventListener('submit', (e) => {
        e.preventDefault();
        createFormDataEmail();
    });
if (formComment)
    formComment.addEventListener('submit', (e) => {
        e.preventDefault();
        createFormDataComment();
    });
function createFormDataEmail() {
    if (formEmail) {
        submitEmail = new FormData(formEmail);
        commonFormData(submitEmail);
        formEmail.reset();
    }
}
function createFormDataComment() {
    if (formComment) {
        submitComment = new FormData(formComment);
        commonFormData(submitComment);
        formComment.reset();
    }
}
function commonFormData(formData) {
    formData.forEach((value, key) => commonData.append(key, value));
    if (commonData.has('check'))
        console.log('Checkbox is ', commonData.get('check'));
    if (!commonData.has('check'))
        console.log('Checkbox is off');
    if (commonData.has('email') && commonData.has('title') && commonData.has('textarea')) {
        console.log('All RIGHT!', commonData, 'FETCH THE DATA');
        commonData = new FormData();
    }
}
// const formData = {
// 	email: "",
// 	title: "",
// 	text: "",
// 	checkbox: false,
// };
// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
// function validateFormData(data) {
// 	// Если каждое из свойств объекта data правдиво...
// 	if ("condition") {
// 		return true;
// 	} else {
// 		console.log("Please, complete all fields");
// 		return false;
// 	}
// }
// function checkFormData(data) {
// 	const { email } = data;
// 	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
// 	// Если email совпадает хотя бы с одним из массива
// 	if ("condition") {
// 		console.log("This email is already exist");
// 	} else {
// 		console.log("Posting data...");
// 	}
// }
