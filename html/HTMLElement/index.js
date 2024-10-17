//* Element
var divWithClass = document.querySelector('.div');
var divWithID = document.querySelector('#div');
var divCollection = document.querySelectorAll('div');
var divCollectionByClass = document.querySelectorAll('.div');
//* HTMLElement
var divGetId = document.getElementById('#div');
//* HTMLCollectionOf<Element> (LIVE collection) contains only HTMLElements
var divGetClassName = document.getElementsByClassName('.div');
var divGetElement = document.getElementsByTagName('div');
//* NodeListOf<HTMLElement> includes all Nodes: texts, comments and e.d.
var divGetName = document.getElementsByName('divName');
//* HTMLDivElement
var divWithTag = document.querySelector('div');
var inputWithClass = document.querySelector('.input');
//* class Node extends only class Element
var inputWithTag = document.querySelector('input');
//* class Node extends with class Element, class HTMLElement, class HTMLInputElement - all methods in
