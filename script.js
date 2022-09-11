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

// c) element.insertBefore()
// Dodaje podany w argumencie element w określonym miejscu

const li2 = document.createElement("li");
li2.textContent = "123";

//list1.insertBefore(li2, list1.childNodes[2]);

// d) string + element.insertAdjacentHTML()
const html =
  '<li id="li-to-remove">Element inserted using insertAdjacentHTML method.</li>';
list1.insertAdjacentHTML("beforeend", html);

// 4. USUWANIE ELEMENTÓW

// a) czyszczenie zawartości elementów przy pomocy innerHTML

//console.log(firstArticle.innerHTML);
//firstArticle.innerHTML = "";

// b) element.remove()

const liToRemove = document.getElementById("li-to-remove");
//console.log(liToRemove);
liToRemove.remove();

// c) element.removeChild()
// Usuwa podany element dziecko z elemetu na którym metoda została wywołana.
// console.log(list1.childNodes);
// console.log(list1.children);
list1.removeChild(list1.firstElementChild);

// 5. ZAMIANA ELEMENTÓW

// a) element.replaceChild()
// Metoda wywoływana na elemencie rodzicu, pierwszy argument to element nowy (do wstawienia), drugi argument to element stary (do usunięcia).
const li3 = document.createElement("li");
li3.textContent = "This is a replaced element.";
list1.replaceChild(li3, list1.children[1]);

// 6. KLONOWANIE ELEMENTÓW

// KLONOWANIE PŁYTKIE
// <li id="1">123</li>
// <li id='1'></li>

// KLONOWANIE GŁĘBOKIE
// <li id="1">123</li>
// <li id='1'>123</li>

// a) element.cloneNode()

// a.1)
const shallowClonedLi = li3.cloneNode(false);

// a.2)
const deepClonedLi = li3.cloneNode(true);
// console.log(li3);
// console.log(deepClonedLi);

// 7. AKTUALIZACJA/DODAWANIE/USUWANIE ZAWARTOŚCI

// a) element.textContent
// Dostęp do zawartości tekstowej danego elementu
deepClonedLi.textContent = "123";
// console.log(deepClonedLi.textContent);

// b) element.innerText
// Dostęp do zawartości tekstowej danego elementu
deepClonedLi.innerText = "321";
// console.log(deepClonedLi);

// c) element.innerHTML
// console.log(firstArticle.innerHTML);
// firstArticle.innerHTML = "<h3>123</h3>";

// d) element.appendChild()
// Modyfikacja elementu poprzez dodanie kolejnego elementu jako ostatnie dziecko.

// 8. DODAWANIE/AKTUALIZACJA/USUWANIE ATRYBUTÓW ELEMENTÓW.

// a) element.attributes
// console.log(navH1Element.attributes);

// b) element.setAttribute()
// Metoda służy do dodawania atrybutów, pierwszy argument to nazwa atrybutu, drugi argument to wartość atrybutu.
deepClonedLi.setAttribute("id", "deep-cloned");
console.log(deepClonedLi);

// c) element.removeAttribute()
// Metoda usuwa podany w argumencie atrybut.
deepClonedLi.removeAttribute("id");
console.log(deepClonedLi);

// Zad 2.
// a) Usuń wszystkie elementy HTML z body.
// b) Odtwórz interfejs przy pomocy wcześniej podanych metod (document.createElement, element.appendChild, setAttribute...).
