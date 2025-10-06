const testy = document.querySelectorAll(".slide");
let currentTesty = 0;

function showTesty(index) {
    testy.forEach(testi => testi.classList.remove("active"));
    testy[index].classList.add("active");
}

document.getElementById("next").onclick = () => {
    currentTesty = (currentTesty + 1) % testy.length;
    showTesty(currentTesty);
}

document.getElementById("prev").onclick = () => {
    currentTesty = (currentTesty - 1 + testy.length) % testy.length;
    showTesty(currentTesty);
}

setInterval(() => {
    currentTesty = (currentTesty + 1) % testy.length;
    showTesty(currentTesty);
}, 4000);