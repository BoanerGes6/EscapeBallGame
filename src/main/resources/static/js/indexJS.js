const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
	playBtn.classList.add("active-play-btn");
	
	// remove green color after the set ms 
	setTimeout(() => {
		playBtn.classList.remove("active-play-btn");
	}, 300);
})