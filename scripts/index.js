const prankCard = document.getElementById("pranked");

const roll = `<iframe width="1879" height="718" src="https://www.youtube.com/embed/2Pgl-JC2sgk" title="PINK GUY - セックス大好き" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

function addPrank() {
	console.log("Hello, world!");
	prankCard.innerHTML = roll;
	prankCard.getElementsByTagName("iframe")[0].requestFullscreen();

	prankCard.removeEventListener("click", addPrank);
}

prankCard.addEventListener("click", addPrank);
