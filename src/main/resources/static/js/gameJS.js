const gameArea = document.getElementById("game-panel");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const popers = document.getElementById("popers");
const ball = document.getElementById("ball");

initialSettings();

function initialSettings() {
	// alert("arrow key pressed!");
	const startRect = document.createElement("div");
	startRect.classList.add("platform")
	gameArea.appendChild(startRect);
	
	for (let i = 0; i < 15; i++){
		const blade = document.createElement("div");
		blade.classList.add("blades");
		popers.appendChild(blade);
	}
	
	ball.addEventListener("animationend", () => {
		ball.style.animation = "none";
		popers.style.animation = "popersEntry 1s ease-in forwards";
	})
}

document.addEventListener("keydown", (event) => {

	if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
		if (event.key === "ArrowLeft") {
			leftBtn.click();
		} 
		if (event.key === "ArrowRight") {
			rightBtn.click();
		}
	}	
})

let lastClickTime = 0;
let ballInterval = null;
let platformInterval = null;
let movementStarted  = false;

leftBtn.addEventListener("click",() => {
	leftBtn.classList.add("active-arrow");
	
	setTimeout(() => {
		leftBtn.classList.remove("active-arrow");
	},300);
	
	
	let now = Date.now();
	let timeDiff = now - lastClickTime;
	lastClickTime = now;
	
	let step = 2;
	
	if (timeDiff < 200) {
		step = 20;
	} else if (timeDiff < 400) {
		step = 10;
	}
	
	let leftFrom = parseInt(window.getComputedStyle(ball).left, 10);

	if (leftFrom <= 0) {
		step = 0;
	}
	
	ball.style.left = (leftFrom - step) + "px";
	
	const platforms = document.querySelectorAll(".platform");
	
	if (isBallAbovePlatform(platforms)) {
		console.log("Ball is above a platform!");
	} else {
		console.log("Ball is not above any platform");
	}
});

rightBtn.addEventListener("click", () => {
	rightBtn.classList.add("active-arrow");
	
	setTimeout(() => {
		rightBtn.classList.remove("active-arrow");
	}, 300);
	
	let now = Date.now();
	let timeDiff = now - lastClickTime;
	lastClickTime = now;
	
	let step = 2;
	
	if (timeDiff < 200) {
		step = 20;
	} else if (timeDiff < 400) {
		step = 10;
	}
	
	let rightFrom = parseInt(window.getComputedStyle(ball).left, 10);
	
	if (rightFrom >= 430) {
		step = 0;
	}
	
	ball.style.left = (rightFrom + step) + "px";

	const platforms = document.querySelectorAll(".platform");
	
	if (!movementStarted && isBallAbovePlatform(platforms)) {
		movementStarted = true;
		console.log("Ball is above a platform!");
		platforms.forEach(platform => {
			platformInterval = setInterval(() => {
				let topFrom = parseInt(window.getComputedStyle(platform).top, 10);
				platform.style.top = (topFrom - 2) + "px";
			}, 50);
		})
		
		ballInterval = setInterval(() => {
			let ballTopFrom = parseInt(window.getComputedStyle(ball).top, 10);
			ball.style.top = (ballTopFrom - 2) + "px";
			console.log("ball top: ",ballTopFrom);
			if (!isBallAbovePlatform(platforms)) {
				clearInterval(ballInterval)
				movementStarted = false;
			}
		},50)
		
	} else {
		console.log("Ball is not above any platform");
	}
});

function isBallAbovePlatform(platforms) {
	
	const ballRect = ball.getBoundingClientRect();
	let isAbove = false;

	platforms.forEach(platform => {
		const rectRect = platform.getBoundingClientRect();
		
		const horizotallyAligned = (ballRect.right - 10) >= rectRect.left &&
		(ballRect.left + 5) <= rectRect.right;
		
		const verticallyAbove = Math.abs(ballRect.bottom - rectRect.top) <= 5; // within 5px 
		
		if (horizotallyAligned && verticallyAbove) {
			isAbove = true;
		}
	});
	return isAbove;
}
