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
//console.log(contentDivFirstChild);

// c) element.lastElementChild
// Dostęp do ostatniego dziecka danego elementu
const contentDivLastChild = contentDiv.lastElementChild;
//console.log(contentDivLastChild);

// d) element.nextElementSibling
//console.log(contentDivFirstChild.nextElementSibling);

// e) element.parentElement
// Dostęp do elementu rodzica dla danego elementu
//console.log(contentDivLastChild.parentElement);

// Zad 1.
// Zapisz w zmiennych wszystkie elementy występujące w naszym dokumencie HTML. Staraj się nie modyfikować samego kodu HTML, lecz jeżeli będzie to konieczne, zrób to.
// Postaraj się wykorzystać wszsytkie poznane metody wyboru elementów.

const body = document.body;
const navElement = document.querySelector("nav");
const navH1Element = document.getElementById("nav-h1");
const [firstNavSpan1, secondNavSpan, thirdNavSpan, fourthNavSpan] =
  document.getElementsByClassName("nav-span");
// console.log(secondNavSpan);
const contentDiv1 = document.getElementById("content");
const [firstArticle, secondArticle, thirdArticle, fourthArticle] =
  contentDiv1.children;
const firstH2 = firstArticle.firstElementChild;
const firstParagraph = firstArticle.lastElementChild;
const list1 = document.querySelector("ul");
const [firstLi, secondLi, thirdLi] = list1.children;

// const x = [1, 2, 3, 4, 5];
// const [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber] = x;
// console.log(firstNumber);
// console.log(fourthNumber);

// 3. TWORZENIE I DODAWANIE ELEMENTÓW

// a) document.createElement()
// Tworzy element w zależności od podanego argumentu, do argumentu wchodzi nazwa tagu
const additionalLi = document.createElement("li");
additionalLi.textContent = 'document.querySelectorAll("cssSelectorHere")';
//console.log(additionalLi);

// b) element.appendChild()
// Dodaje podany w argumencie element jako ostatnie dziecko elementu na którym metoda została wywołana

list1.appendChild(additionalLi);
