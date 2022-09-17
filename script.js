// 1. SELEKTORY (query methods)

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujacy element, jeżeli nie znajdzie nic to zwraca null.

// Wybieranie po ID
const navH1 = document.querySelector("#nav-h1");
// console.log(navH1);
//console.log(typeof navH1);

// Wybieranie po klasie
const firstNavSpan = document.querySelector(".nav-span");
// console.log(firstNavSpan);

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
// console.log(deepClonedLi);

// c) element.removeAttribute()
// Metoda usuwa podany w argumencie atrybut.
deepClonedLi.removeAttribute("id");
// console.log(deepClonedLi);

// Zad 2.
// a) Usuń wszystkie elementy HTML z body.
// b) Odtwórz interfejs przy pomocy wcześniej podanych metod (document.createElement, element.appendChild, setAttribute...).

// a)
navElement.remove();
contentDiv.remove();

// b)

// nav and its children
const newNavElement = document.createElement("nav");
const newH1Element = document.createElement("h1");
newH1Element.setAttribute("id", "nav-h1");
newH1Element.textContent = "DOM";
newNavElement.appendChild(newH1Element);
const newHomeSpan = document.createElement("span");
newHomeSpan.setAttribute("class", "nav-span");
newHomeSpan.textContent = "Home";
newNavElement.appendChild(newHomeSpan);

for (let i = 1; i < 4; i++) {
  const span = document.createElement("span");
  span.setAttribute("class", "nav-span");
  span.textContent = `Page ${i}`;
  newNavElement.appendChild(span);
}

document.body.appendChild(newNavElement);

const newContentDiv = document.createElement("div");
newContentDiv.setAttribute("id", "content");

const renderHomePage = () => {
  const newFirstArticle = document.createElement("article");
  const newFirstH2 = document.createElement("h2");
  newFirstH2.textContent = "What's DOM?";
  newFirstArticle.appendChild(newFirstH2);
  const newFirstParagraph = document.createElement("p");
  newFirstParagraph.textContent = `The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the
  document as nodes and objects; that way, programming languages can
  interact with the page. A web page is a document that can be either
  displayed in the browser window or as the HTML source. In both cases,
  it is the same document but the Document Object Model (DOM)
  representation allows it to be manipulated. As an object-oriented
  representation of the web page, it can be modified with a scripting
  language such as JavaScript.`;
  newFirstArticle.appendChild(newFirstParagraph);
  newContentDiv.appendChild(newFirstArticle);
  document.body.appendChild(newContentDiv);

  const newLastArticle = document.createElement("article");
  const newLastH2 = document.createElement("h2");
  newLastH2.textContent = "How to access the DOM?";
  newLastArticle.appendChild(newLastH2);
  const newLastParagraph = document.createElement("p");
  newLastParagraph.textContent = `You don't have to install anything additional, just JavaScript will
  do. We have a few methods called 'selectors', these methods are used
  to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are some of them:`;
  newLastArticle.appendChild(newLastParagraph);
  newContentDiv.appendChild(newLastArticle);

  const newUl = document.createElement("ul");
  const newFirstLi = document.createElement("li");
  newFirstLi.textContent = `document.querySelector('cssSelectorHere')`;
  newUl.appendChild(newFirstLi);
  newLastParagraph.appendChild(newUl);
};
renderHomePage();
// Zad 3.
// a) Stwórz funkcję displayForm()
// W funkcji:
// b) stwórz element <form> i nadaj mu id 'contact-form'
// c) stwórz element <h2> i nadaj mu textContent 'Contact us!'
// d) stwórz element <input> i nadaj mu type'email' oraz id 'contact-form-input-email'
// e) stwórz element <textarea> i nadaj mu id 'contact-form-textarea'
// f) stwórz element <button> i nadaj mu type 'submit', id 'contact-form-submit-button' oraz textContent na 'Send'
// g) podepnij wszystkie elementy (przy pomocy metody appendChild) do elementu form, a sam form podepnij do diva content
// h) testowo wywołaj funkcję

// a)
const displayForm = () => {
  // b)
  const form = document.createElement("form");
  form.setAttribute("id", "contact-form");

  // c)
  const h2 = document.createElement("h2");
  h2.textContent = "Contact us!";
  // console.log(h2);

  // d)
  const input = document.createElement("input");
  input.setAttribute("id", "contact-form-input-email");
  input.setAttribute("type", "email");
  // console.log(input);

  // e)
  const textarea = document.createElement("textarea");
  textarea.setAttribute("id", "contact-form-textarea");
  // console.log(textarea);

  // f)
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "contact-form-submit-button");
  button.textContent = "Send";
  // console.log(button);

  // const elements = [document.createElement(h2), document.createElement(input)];

  // elements[0].setAttribute("id", "x");

  // elements.forEach((el) => form.appendChild(el));

  // g)
  form.appendChild(h2);
  form.appendChild(input);
  form.appendChild(textarea);
  form.appendChild(button);
  // console.log(form);
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(form);
  // console.log(contentDiv);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // TYLKO PRZY REAGOWANIU NA SUBMIT
    console.log(event);
    const inputValue = input.value;
    const textareaValue = textarea.value;
    console.log(inputValue);
    console.log(textareaValue);
  });
};
// displayForm();

// const button = document.createElement("button");
// button.textContent = "Click";
// document.body.appendChild(button);

// button.addEventListener("click", function () {
//   console.log("Clicked!");
//   displayForm();
//   // ...
// });

const navButtons = document.getElementsByClassName("nav-span");

const contentDivEl = document.getElementById("content");

navButtons[1].addEventListener("click", function () {
  contentDivEl.innerHTML = "";
  displayForm();
});

// Po klinięciu na przycisk Home ma się wyświetlić home page (wywołanie funkcji renderHomePage), nie kopiować kodu!

navButtons[0].addEventListener("click", function () {
  contentDivEl.innerHTML = "";
  renderHomePage();
});

// Zad 4.
// 1. Stwórz funkcję renderCalculator.
// 2. Stwórz element <form> i ustaw jego id na 'calculator'.
// 3. Stwórz 2 elementy <input>, obu nadaj type 'number', pierwszemu nadaj id 'first-number-input', drugiemu 'second-number-input'.
// 4. Stwórz element <select>.
// 5. Stwórz zwykły array: ["+", "-", "*", "/"], nazwij go 'options'.
// 6. Metodą map przejedź po arrayu options i zapisz wynik do zmiennej optionElements.
// W metodzie map:
// - stwórz element <option>
// - nadaj mu atrybut value na aktualny element po którym iterujesz (pierwszy parametr metody map)
// - nadaj mu textContent na aktualny element po którym iterujesz (pierwszy parametr metody map)
// - zwróć element przy pomocy słowa kluczowego return
// 7. Wywołaj metode forEach na liście optionElements. (optionElements.forEach(el => ...))
// W metodzie forEach:
// - podepnij element po którym aktulanie iterujesz (pierwszy parametr metody forEach) do wcześniej stworzonego elementu <select> (.appendChild())
// 8. Stwórz element <button>
// - nadaj mu type 'submit'
// - nadaj mu id 'calculator-submit-button'
// - nadaj mu textContent 'GO'
// 9. Stwórz element <span>
// - nadaj mu id 'result-span'
// 10. Stwórz element <h2>
// - nadaj mu textContent 'Calculator'
// 11. Podepnij wszystkie stworzone elementy do elementu <form> za pomocą metody appendChild, kolejność:
// - h2
// - firstNumberInput
// - secondNumberInput
// - select
// - submit button
// - result span
// form.appendChild(h2)
// form.appendChild(firstNumberInput)
// ...
// 12. Podepnij element <form> do content diva (wybierz go przy pomocy getElementById, id: 'content')
// 13. Stwórz nową podstronę i tam wyświetlaj kalkulator (wywołanie funckji renderCalculator)

// navButtons[2].addEventListener('click', () => {
//   contentDiv.innerHTML = ...
// })

// 1.
const renderCalculator = () => {
  // 2.
  const form = document.createElement("form");
  form.setAttribute("id", "calculator");

  // 3.
  const firstNumberInput = document.createElement("input");
  firstNumberInput.setAttribute("type", "number");
  firstNumberInput.setAttribute("id", "first-number-input");

  const secondNumberInput = document.createElement("input");
  secondNumberInput.setAttribute("type", "number");
  secondNumberInput.setAttribute("id", "second-number-input");

  // 4.
  const select = document.createElement("select");

  // 5.
  const options = ["+", "-", "*", "/"];

  // 6.
  const optionElements = options.map((el) => {
    const option = document.createElement("option");
    option.setAttribute("value", el);
    option.textContent = el;
    return option;
  });

  // 7.
  optionElements.forEach((option) => select.appendChild(option));

  // 8.
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "calculator-submit-button");
  button.textContent = "GO";

  // 9.
  const span = document.createElement("span");
  span.setAttribute("id", "result-span");

  // 10.
  const h2 = document.createElement("h2");
  h2.textContent = "Calculator";

  // 11.
  form.appendChild(h2);
  form.appendChild(firstNumberInput);
  form.appendChild(secondNumberInput);
  form.appendChild(select);
  form.appendChild(button);
  form.appendChild(span);

  // 12.
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstInputValue = +firstNumberInput.value;
    const secondInputValue = +secondNumberInput.value;
    const selectValue = select.value;
    if (selectValue === "+")
      span.textContent = firstInputValue + secondInputValue;
    if (selectValue === "-")
      span.textContent = firstInputValue - secondInputValue;
    if (selectValue === "*")
      span.textContent = firstInputValue * secondInputValue;
    if (selectValue === "/")
      span.textContent = firstInputValue / secondInputValue;
  });
};

// 13.
navButtons[2].addEventListener("click", function () {
  contentDivEl.innerHTML = "";
  renderCalculator();
});
