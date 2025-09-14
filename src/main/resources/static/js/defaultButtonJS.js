const btn = document.getElementsByClassName("button");

for (let i = 0;i < btn.length; i++) {
	
	btn[i].addEventListener("click",function () {
		this.classList.add("on-click");
		
		setTimeout(() => {
			this.classList.remove("on-click");
		}, 300);
	});
}