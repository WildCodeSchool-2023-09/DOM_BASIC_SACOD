/**
 *
 * EXEMPLE 1
 */
// const body = document.body;

// body.addEventListener("mouseover", function () {
// 	body.innerHTML = "<h1>Hello je suis la team SACOD 🚀💪</h1>";
// 	// body.innerHTML = '<script>alert("hacked 😈")</script>';
// });

/**
 *
 * EXEMPLE 2
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
 */

// const allLi = document.querySelectorAll("li");

// console.log(allLi);

// for (const li of allLi) {
// 	li.addEventListener("click", () => {
// 		console.log(li.textContent);
// 	});
// }

// for (const key in allLi) {
// 	if (Object.hasOwnProperty.call(allLi, key)) {
// 		const element = allLi[key];
// 		console.log(element);
// 	}
// }

/**
 * EXEMPLE 4
 */

const body = document.body;
const themeButton = document.querySelector("#theme");

themeButton.addEventListener("click", function () {
	body.classList.toggle("dark");
});

const button = document.getElementById("my-button");
const ul = document.getElementById("my-list");

button.addEventListener("click", () => {
	const text = document.getElementById("text").value;
	const li = document.createElement("li");
	li.innerHTML = text;
	ul.append(li);
});
