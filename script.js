// 1. SELEKTORY (query methods)

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujacy element, jeżeli nie znajdzie nic to zwraca null.

// Wybieranie po ID
const navH1 = document.querySelector("#nav-h1");
//console.log(navH1);
//console.log(typeof navH1);

// Wybieranie po klasie
const firstNavSpan = document.querySelector(".nav-span");
//console.log(firstNavSpan);

// Wybieranie po tagu
const nav = document.querySelector("nav");
//console.log(nav);

// b) document.querySelectorAll()
// Przyjmuje jako argument selektor CSSowy, zwraca NodeList, jeżeli nie znajdzie nic to zwraca null.
const navSpans = document.querySelectorAll(".nav-span");
//console.log(navSpans);
// navSpans.forEach((el) => console.log(el));

// c) document.getElementById()
const contentDiv = document.getElementById("content");
//console.log(contentDiv);

// d) document.getElementsByClassName()
const navSpans2 = document.getElementsByClassName("nav-span");
//console.log(navSpans2);

const navS = [...navSpans2];
// console.log(navS);
// console.log(...navS);

// 2. SUB-SELEKTORY

// a) element.childNodes
// Dostęp do wszystkich node'ów dzieci danego elementu
const contentDivChildren = contentDiv.childNodes;
//console.log(contentDivChildren);
// - childElementCount
// console.log(contentDiv.childElementCount);
// console.log(document.childNodes);

// b) element.firstElementChild
// Dostęp do pierwszego dziecka danego elementu
const contentDivFirstChild = contentDiv.firstElementChild;
console.log(contentDivFirstChild);

// c) element.lastElementChild
// Dostęp do ostatniego dziecka danego elementu
const contentDivLastChild = contentDiv.lastElementChild;
console.log(contentDivLastChild);

// d) element.nextElementSibling
console.log(contentDivFirstChild.nextElementSibling);

// e) element.parentElement
// Dostęp do elementu rodzica dla danego elementu
console.log(contentDivLastChild.parentElement);
