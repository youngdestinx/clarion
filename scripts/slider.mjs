const cards = document.querySelector("article");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

let currentScrollPosition = 0;

const cardWidth = document.querySelector("#kris").getBoundingClientRect().width;
const nextCardWidth = document.querySelector("#peter").getBoundingClientRect().left;
const gap = nextCardWidth - (cardWidth + document.querySelector("#kris").getBoundingClientRect().left);
const total = cardWidth + gap;

let autoPlayInterval = 3000;
let autoPlayId;

function next() {
    cards.scrollTo({
        left: currentScrollPosition,
    });
    currentScrollPosition += total;
    if (currentScrollPosition >= cards.scrollWidth - cards.offsetWidth) {
        currentScrollPosition = 0;
    }
}

function previous() {
    currentScrollPosition -= total;
    cards.scrollTo({
        left: currentScrollPosition,
    });
}

function play() {
    autoPlayId = setInterval(next, autoPlayInterval);
}

function previousPlay() {
    clearInterval(autoPlayId);
    previous();
}

function nextPlay() {
    clearInterval(autoPlayId);
    next();
}

prevArrow.addEventListener("click", previousPlay);
nextArrow.addEventListener("click", nextPlay);
play();

export {
    play,
    previousPlay,
    nextPlay,
};