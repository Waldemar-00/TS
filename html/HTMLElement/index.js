"use strict";
//* Element
const divWithClass = document.querySelector('.div');
const divWithID = document.querySelector('#div');
const divCollection = document.querySelectorAll('div');
const divCollectionByClass = document.querySelectorAll('.div');
//* HTMLElement
const divGetId = document.getElementById('#div');
//* HTMLCollectionOf<Element> (LIVE collection) contains only HTMLElements
const divGetClassName = document.getElementsByClassName('.div');
const divGetElement = document.getElementsByTagName('div');
//* NodeListOf<HTMLElement> includes all Nodes: texts, comments and e.d.
const divGetName = document.getElementsByName('divName');
//* HTMLDivElement
const divWithTag = document.querySelector('div');
const inputWithClass = document.querySelector('.input');
//* class Node extends only class Element
const inputWithTag = document.querySelector('input');
//* class Node extends with class Element, class HTMLElement, class HTMLInputElement - all methods in
