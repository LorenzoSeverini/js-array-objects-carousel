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

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const container = document.querySelector('.container');
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnailsContainer = document.querySelector('.thumbnails-container');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const reverseBtn = document.querySelector('.reverse-btn');


// *************************
// JS FUNCTIONS
// *************************

let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
    showImage(currentItem);
});

// Show Image 
function showImage(Image) {
    Image.array.forEach(element => {
        const { image, title, text } = element;
        const card = `
        <div class="slider">
            <img src="${image}" alt="${title}" class="img">
            <h2 class="title">${title}</h2>
            <p class="text">${text}</p>
        </div>
        `;  
    });
}

// Show next image
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > images.length - 1) {
        currentItem = 0;
    }
    showImage(currentItem);
});

// Show prev image
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = images.length - 1;
    }
    showImage(currentItem);
});

// Show next Image
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > images.length - 1) {
        currentItem = 0;
    }
    showImage(currentItem);
});

// Show prev Image
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = images.length - 1;
    }
    showImage(currentItem);
});

// *************************
// JS BONUS
// *************************

// BONUS 1
// Create thumbnails for each image in the array of objects and add them to the page (you can use a loop for this) 
thumbnailsContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('thumbnail')) {
        const index = target.dataset.id;
        currentItem = index;
        showImage(currentItem);
    }
});

// BONUS 2
// Create a timer that changes the image every 3 seconds 
let timer = setInterval(function () {
    currentItem++;
    if (currentItem > images.length - 1) {
        currentItem = 0;
    }
    showImage(currentItem);
}, 3000);

// BONUS 3
// Add a stop and play button to the page 
startBtn.addEventListener('click', function () {
    timer = setInterval(function () {
        currentItem++;
        if (currentItem > images.length - 1) {
            currentItem = 0;
        }
        showImage(currentItem);
    }, 3000);
});

stopBtn.addEventListener('click', function () {
    clearInterval(timer);
});

reverseBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = images.length - 1;
    }
    showImage(currentItem);
});
