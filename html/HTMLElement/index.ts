//* Element

const divWithClass: Element | null = document.querySelector( '.div' )
const divWithID: Element | null = document.querySelector( '#div' )
const divCollection: NodeListOf<HTMLDivElement> = document.querySelectorAll( 'div' )
const divCollectionByClass: NodeListOf<Element> = document.querySelectorAll('.div')

//* HTMLElement

const divGetId: HTMLElement | null = document.getElementById( '#div' )

//* HTMLCollectionOf<Element> (LIVE collection) contains only HTMLElements

const divGetClassName:
  HTMLCollectionOf<Element> = document.getElementsByClassName( '.div' )
const divGetElement:
  HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName( 'div' )

//* NodeListOf<HTMLElement> includes all Nodes: texts, comments and e.d.

const divGetName: NodeListOf<HTMLElement> = document.getElementsByName( 'divName' )

//* HTMLDivElement

const divWithTag: HTMLDivElement | null = document.querySelector( 'div' )

const inputWithClass: Element | null = document.querySelector( '.input' )
//* class Node extends only class Element
const inputWithTag: HTMLInputElement | null = document.querySelector( 'input' )
//* class Node extends with class Element, class HTMLElement, class HTMLInputElement - all methods in