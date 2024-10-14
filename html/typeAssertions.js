var str = 'some string';
var newType = str;
//* console.log(newType)
var h1 = document.querySelector('h1');
//* querySelector has HTMLHeadingElement | null type
h1.style.color = 'red';
var ourScriptElement = document.querySelector('.script');
console.log(ourScriptElement, "OUR JS");
var div = document.querySelector('.div');
//! Event below happens later than the document.addEventListener!!! It will wait all assets
window.onload = function () {
    if (div)
        div.style.backgroundColor = 'grey';
};
// document.addEventListener( 'DOMContentLoaded', function () {
//   if(div) div.style.backgroundColor = 'black'
// })
//! DOMContentLoaded will wait only HTML
//* INPUT
var inputNumber = document.querySelector('.inputNumber');
//* we are always getting a string, see below
//? const numberFromInput = inputNumber?.value as any as number
//! It's real bad code (see up), because value will be always string!!!
var numberFromInput = inputNumber === null || inputNumber === void 0 ? void 0 : inputNumber.value;
console.log(+numberFromInput); //* + Will work in JS
//* ///////////////////////////////////////////////////////////////////
//! function
function fetchData(url, method) {
    console.log(url, method);
}
//* FIRST
var dataOfFetch0 = {
    url: "https://google.com",
    method: "GET"
};
//* common case
fetchData("https://google.com", "GET");
//* you can change value of method later
fetchData(dataOfFetch0.url, dataOfFetch0.method);
//* SECOND
var dataOfFetch1 = {
    url: "https://google.com",
    method: "GET" //* literal type
};
fetchData(dataOfFetch1.url, dataOfFetch1.method); //* literal type
//* THIRD
var dataOfFetch2 = {
    url: "https://google.com",
    method: "GET"
}; //* all object became a literal type
//* dataOfFetch2.method = "POST" Error: because all the properties are read-only
fetchData(dataOfFetch2.url, dataOfFetch2.method); //* all the properties have a literal type, and they are read-only
//! FOUR
var dataOfFetch4 = {
    url: "https://google.com",
    method: "GET"
};
//* example with angle brackets
fetchData(dataOfFetch4.url, dataOfFetch4.method);
//* getElementById, getElementByName(name='up), getElementByClassName and e.d.
var paragraph = document.getElementById('paragraph');
if (paragraph)
    paragraph.style.color = 'green';