const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

arrow_left.addEventListener("click", function() {          
    alert("CLICK!!!"); 
});

arrow_right.addEventListener('click', function() {          
    alert("CLICK!!!"); 
});

let dots = document.querySelector(".dots");

for (let i = 0; i < 4; i++) {
	const point = document.createElement("div");
	dots.appendChild(point);
	point.classList.add("dot");	
}

let selected = document.querySelector(".dot");
selected.classList.add("dot_selected");	

