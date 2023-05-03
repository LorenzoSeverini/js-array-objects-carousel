// *************************
// JS ARRAY OF OBJECTS 
// *************************

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-Image, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// *************************
// JS VARIABLES
// *************************

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const image = document.getElementById('image');
const title = document.getElementById('title');
const text = document.getElementById('text');
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const reverseBtn = document.getElementById('reverse-btn');
// Get slider images container
const sliderImages = document.querySelector('.slider-images');
let timer;

// *************************
// JS FUNCTIONS
// *************************

let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
    showimage(currentItem);
});

// Show image 
function showimage(index) {
    const item = images[index];
    image.src = item.image; // should be updated to img.src = item.image;
    title.textContent = item.title;
    text.textContent = item.text;
}

// Create image elements for each object in the images array
images.forEach(function(item) {
	const img = document.createElement('img');
	img.src = item.image;
	img.alt = item.title;
	sliderImages.appendChild(img);
});

// Show next image
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > images.length - 1) {
        currentItem = 0;
    }
    showimage(currentItem);
});

// Show prev image
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = images.length - 1;
    }
    showimage(currentItem);
});

// autoPlay
playBtn.addEventListener('click', function () {
    timer = setInterval(function () {
        currentItem++;
        if (currentItem > images.length - 1) {
            currentItem = 0;
        }
        showimage(currentItem);
    }, 3000);
});

// Stop
stopBtn.addEventListener('click', function () {
    clearInterval(timer);
});

// Reverse
// reversebtn change the direction of the slider
reverseBtn.addEventListener('click', function () {
    sliderImages.classList.toggle('reverse');
});