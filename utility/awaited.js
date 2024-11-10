var jsonObject = '{"userId": 10, "id": 97,"title": "quas fugiat ut perspiciatis vero provident","body": "eum non blanditiis soluta porro quibusdam voluptas vel voluptatem qui placeat dolores qui velit aut vel inventore aut cumque culpa explicabo aliquid at perspiciatis est et voluptatem dignissimos dolor itaque sit nam"}';
var objectFromJson = JSON.parse(jsonObject);
//! use nerrowing
if ("userId" in objectFromJson && "id" in objectFromJson) {
    var h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = 'We got the file that needed for us!';
        document.body.append(h1);
    }
    console.log('We got the file that needed for us!');
}
//*____________________________________________________
var _URL = 'https://jsonplaceholder.typicode.com/todos';
var todoList = [];
fetch(_URL).then(function (response) { return response.json(); }).then(function (todo) {
    if ("id" in todo)
        todoList.push(todo);
    else if (Array.isArray(todo))
        todoList = todo;
    else
        console.log("".concat(todo, " - is a string"));
    console.log(todo);
});
var promise_1 = new Promise(function (resolve, reject) {
    resolve('TEST');
});
promise_1.then(function (message) { return console.log(message); });
