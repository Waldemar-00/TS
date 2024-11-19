"use strict";
const jsonObject = '{"userId": 10, "id": 97,"title": "quas fugiat ut perspiciatis vero provident","body": "eum non blanditiis soluta porro quibusdam voluptas vel voluptatem qui placeat dolores qui velit aut vel inventore aut cumque culpa explicabo aliquid at perspiciatis est et voluptatem dignissimos dolor itaque sit nam"}';
const objectFromJson = JSON.parse(jsonObject);
//! use nerrowing
if ("userId" in objectFromJson && "id" in objectFromJson) {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = 'We got the file that needed for us!';
        document.body.append(h1);
    }
    console.log('We got the file that needed for us!');
}
//*____________________________________________________
const _URL = 'https://jsonplaceholder.typicode.com/todos';
let todoList = [];
fetch(_URL).then((response) => response.json()).then((todo) => {
    if ("id" in todo)
        todoList.push(todo);
    else if (Array.isArray(todo))
        todoList = todo;
    else
        console.log(`${todo} - is a string`);
    console.log(todo);
});
const promise_1 = new Promise((resolve, reject) => {
    resolve('TEST');
});
promise_1.then(message => console.log(message));
async function getUser() {
    const user = [{ name: 'John', age: 77 }];
    return user;
}
const ourUser = getUser();
