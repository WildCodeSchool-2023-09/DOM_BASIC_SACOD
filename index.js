/**
 *
 * EXEMPLE 1
 *
 * Le cas par défaut des slides
 *
 */

// const body = document.body;
// body.addEventListener("mouseover", function () {
// 	body.innerHTML = "<h1>Hello je suis la team SACOD 🚀💪</h1>";
// });

/**
 *
 * EXEMPLE 2
 *
 * Récupèrer une balise depuis le DOM, ici, la balise `SPAN`
 *
 */

// const span = document.getElementsByTagName("span");
// console.log(span);
// span[0].addEventListener("click", () => {
// 	document.body.innerHTML = "<h1>Hello je suis la team SACOD 🚀💪</h1>";
// });

/**
 *
 * EXEMPLE 3
 *
 * Je boucle sur tous mes li pour ajouter un écouteur d'événement
 *
 */

// const allLi = document.querySelectorAll("li");
// console.log(allLi);

// FACILE 🚀

// for (const li of allLi) {
// 	li.addEventListener("click", () => {
// 		console.log(li.textContent);
// 	});
// }

// POSSIBLE mais beaucoup plus compliqué 🥵

// for (const key in allLi) {
// 	if (Object.hasOwnProperty.call(allLi, key)) {
// 		const element = allLi[key];
// 		console.log(element);
// 	}
// }

/**
 *
 * EXEMPLE 4
 *
 * Je manipule la classList avec un toggle pour ajouter ou supprimer une classe
 *
 */

const body = document.body;
const themeButton = document.querySelector("#theme");

themeButton.addEventListener("click", function () {
	body.classList.toggle("dark");
});

/**
 *
 * EXEMPLE 5
 *
 * Vérification avec une todo list que même après le changement
 * du DOM les nouveaux éléments sont aussi affectés.
 *
 */

const button = document.getElementById("my-button");
const ul = document.getElementById("my-list");

button.addEventListener("click", () => {
	const text = document.getElementById("text").value;
	const li = document.createElement("li");
	li.innerHTML = text;
	ul.append(li);
});
