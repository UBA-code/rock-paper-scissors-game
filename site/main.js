// ? setup the rules page


function gameLoop()
{
	let copyDocument = document.body.cloneNode(true);
	let rulesOpen = document.querySelector(".main-container .rules-btn button");
	let rulesClose;
	
	{
		let rulesPage = document.createElement("div");
		rulesPage.className += "rules-main-container transition bg-transparentColor absolute h-screen w-screen top-0 left-0 flex justify-center items-center scale-0";
		rulesPage.innerHTML = `
		<div class="rules-container h-screen md:h-1/2 w-screen md:w-1/3 flex flex-wrap flex-col bg-white justify-evenly items-center rounded-lg">
		<h1 class="text-DarkText text-4xl font-extrabold">RULES</h1>
		<img src="./site/images/image-rules.svg"/>
		<img class="close-btn cursor-pointer" src="./site/images/icon-close.svg"/>
		</div>
		`;
		document.body.append(rulesPage);
	}
	let rulesPage = document.querySelector(".rules-main-container");
	
	rulesOpen.addEventListener("click", _ => {
		rulesPage.classList.add("scale-100");
	});
	
	document.querySelector(".rules-main-container .close-btn").addEventListener("click", _ => {
		rulesPage.classList.remove("scale-100");
	});

	document.body.addEventListener("keyup", (n) => {
		n.key == 'Escape' ? rulesPage.classList.remove("scale-100") : "";
	})
	
	
	// ? start the game logic
	
	let score;
	let choices;
	let gameArea;
	let playerPlace;
	let bootPlace;
	let resultPlace;
	
	
	function printResult(resultMsg = "default", scoreValue) {
		gameArea.className += " md:grid-cols-3";
		resultPlace.parentNode.className += " flex flex-col justify-center items-center";
		resultPlace.parentNode.classList.add("md:col-span-1");
		resultPlace.parentNode.classList.add("md:order-1");
		bootPlace.parentNode.classList.add("md:order-2");
		resultPlace.classList.add('h-36', 'w-fit', 'justify-between');
		resultPlace.innerHTML = `
		<h1 class="text-6xl text-white font-bold">${resultMsg}</h1>
		<button
		class="retry-btn transition text-xl tracking-widest text-RadialGradientFrom w-full font-normal bg-white py-4 rounded-xl
		hover:text-red-600">PLAY AGAIN</button>
		`;
		document.querySelector(".game-container .retry-btn").addEventListener("click", _ => {
			document.body = copyDocument;
			gameLoop();
		});
		let tmp = +localStorage.getItem("score");
		if (tmp == 0 && scoreValue == -1)
			return;
		localStorage.setItem("score", tmp + scoreValue);
		score.innerHTML = localStorage.getItem("score");
	}

	function checkResult(choices, player, boot) {
		for (let i = 0; i < choices.length; i++) {
			if (choices[i].dataset.type == player.dataset.type) {
				let next = i + 1 >= choices.length ? choices[0] : choices[i + 1];
				let previous = i - 1 < 0 ? choices[choices.length - 1] : choices[i - 1];
				if (next.dataset.type == boot.dataset.type)
				printResult("YOU LOSE", -1);
			else if (previous.dataset.type == boot.dataset.type)
			printResult("YOU WINE", 1);
		else
		printResult("DRAW", 0);
	return;
	}
	}
	}

	function gameStart() {
		// ? get elements
		score = document.querySelector(".main-container header .score-number");
		choices = document.querySelectorAll(".main-container .game-container .suggestion");
		gameArea = document.querySelector(".main-container .game-container");
		playerPlace = gameArea.querySelector(".suggestion-block:nth-child(1) .center-container");
		bootPlace = gameArea.querySelector(".suggestion-block:nth-child(2) .center-container");
		resultPlace = gameArea.querySelector(".suggestion-block:nth-child(3) .center-container");
		
		localStorage.getItem("score") === null ? localStorage.setItem("score", "0") : score.innerHTML = localStorage.getItem("score");;
		choices.forEach((n) => {
			n.addEventListener("click", _ => {
				let message = document.createElement("h1");
				let random = choices[Math.floor(Math.random() * 3)].cloneNode(true);
				message.className = "text-center mt-10 text-white text-xl";
				choices.forEach((n) => { n.remove() });
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
					setTimeout(() => {
						checkResult(choices, n, random);
					}, 500);
				}, 800);
				return;
			});
		})
	}

	gameStart();
}


gameLoop();
// 2 1