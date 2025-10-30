function move() {
    const testy = document.querySelectorAll(".slide");
    const container = document.querySelector(".slides")
    let currentTesty = 0;

    function showTesty(index) {
        container.style.transform = `translateX(-${index * 100}%)`;
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
    }, 8000);    
}

export default move;