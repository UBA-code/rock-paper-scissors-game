let rulesOpen = document.querySelector(".main-container .rules-btn button");
let rulesClose;


function createRulesPage ()
{
	let rulesPage = document.createElement("div");
	// let tempDiv = document.createElement("div");
	rulesPage.className += "rules-main-container absolute h-screen w-screen bg-white top-0 left-0 translate-x-full";
	rulesPage.innerHTML = `
		<div class="rules-container h-screen flex flex-wrap flex-col justify-evenly items-center">
			<h1 class="text-DarkText text-4xl font-extrabold">RULES</h1>
			<img src="./images/image-rules.svg"/>
			<img class="close-btn cursor-pointer" src="./images/icon-close.svg"/>
		</div>
	`;
	document.body.append(rulesPage);
	let container = document.querySelector(".rules-main-container");
	container.classList.remove("translate-x-full");
	container.className += "transition-transform translate-x-0";
	rulesClose = document.querySelector(".rules-main-container .close-btn");
	rulesClose.addEventListener("click", _=>{
		let rulesPage = document.querySelector(".rules-main-container");
		rulesPage.remove();
	});
}

rulesOpen.addEventListener("click", createRulesPage);
