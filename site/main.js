// ? setup the rules page
let rulesOpen = document.querySelector(".main-container .rules-btn button");
let rulesClose;

{
	let rulesPage = document.createElement("div");
	rulesPage.className += "rules-main-container transition bg-transparentColor absolute h-screen w-screen top-0 left-0 flex justify-center items-center scale-0";
	rulesPage.innerHTML = `
	<div class="rules-container h-screen md:h-1/2 w-screen md:w-1/3 flex flex-wrap flex-col bg-white justify-evenly items-center rounded-lg">
	<h1 class="text-DarkText text-4xl font-extrabold">RULES</h1>
	<img src="./images/image-rules.svg"/>
	<img class="close-btn cursor-pointer" src="./images/icon-close.svg"/>
	</div>
	`;
	document.body.append(rulesPage);
}
let rulesPage = document.querySelector(".rules-main-container");

rulesOpen.addEventListener("click", _=>{
	rulesPage.classList.add("scale-100");
});

document.querySelector(".rules-main-container .close-btn").addEventListener("click", _=>{
	rulesPage.classList.remove("scale-100");
});

document.body.addEventListener("keyup", (n)=>{
	n.key == 'Escape' ? rulesPage.classList.remove("scale-100") : "";
})


// ? start the game logic

let score = document.querySelector(".main-container header .score-number");
let choices = document.querySelectorAll(".main-container .game-container .suggestion");
let playerPlace = document.querySelector(".main-container .game-container .first-container .suggestion-block:nth-child(1)");
let bootPlace = document.querySelector(".main-container .game-container .first-container .suggestion-block:nth-child(2)");
// let paper = document.querySelectorAll();


function game() {
	choices.forEach((n)=>{
		n.addEventListener("click", _=>{
			let random = choices[Math.ceil(Math.random() * 2)].cloneNode(true);
			let message = document.createElement("h1");
			message.className = "text-center mt-10 text-white text-2xl";
			choices.forEach((n)=>{n.remove()});
			// ? player place
			{
				message.innerHTML = `YOU PICKED`;
				playerPlace.append(n.cloneNode(true));
				playerPlace.append(message.cloneNode(true));
			}
			setTimeout(() => {
				// ? boot place
				{
					message.innerHTML = `THE HOUSE PICKED`;
					bootPlace.append(random);
					bootPlace.append(message.cloneNode(true));
				}
				console.log(n.cloneNode(true));
			}, 800);
			return ;
		});
	})
}

game();


// 2 1