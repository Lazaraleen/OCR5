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
const nbSlides = slides.length;

const bannerImage = document.querySelector(".banner-img");
bannerImage.src = "./assets/images/slideshow/" + slides[0].image;

const paraf = document.querySelector("#banner p");
paraf.innerHTML = slides[0].tagLine;

let dots = document.querySelector(".dots");

for (let i = 0; i < nbSlides; i++) {
	const point = document.createElement("div");
	dots.appendChild(point);
	point.classList.add("dot");	
}

dotNb = document.querySelectorAll(".dot");
dotNb[0].classList.add("dot_selected");	

arrow_left.addEventListener("click", clicleft);
arrow_right.addEventListener("click", clicright);

function clicright() {
	indice = 0;
	for (let i = 0; i < nbSlides; i++) {
		test = dotNb[i].classList;
		if (test.contains("dot_selected")) {indice=i;};	
	}
	dotNb[indice].classList.remove("dot_selected");
	if (indice==3) { indice=0; } else { indice++;};
	dotNb[indice].classList.add("dot_selected");
	bannerImage.src = "./assets/images/slideshow/" + slides[indice].image;
	paraf.innerHTML = slides[indice].tagLine;
};

function clicleft() {          
	indice = 0;
	for (let i = 0; i < nbSlides; i++) {
		test = dotNb[i].classList;
		if (test.contains("dot_selected")) {indice=i;};	
	}
	console.log (indice);
	dotNb[indice].classList.remove("dot_selected");
	if (indice==0) { indice=3; } else { indice--;};
	dotNb[indice].classList.add("dot_selected");	
	bannerImage.src = "./assets/images/slideshow/" + slides[indice].image;
	paraf.innerHTML = slides[indice].tagLine;
};