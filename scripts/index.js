const prankCard = document.getElementById("pranked");

const roll = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

function addPrank() {
	console.log("Hello, world!");
	prankCard.innerHTML = roll;
	prankCard.getElementsByTagName("iframe")[0].requestFullscreen();

	prankCard.removeEventListener("click", addPrank);
}

prankCard.addEventListener("click", addPrank);
