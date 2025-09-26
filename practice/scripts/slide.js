const slider = document.getElementsById("mySlider");
const sliderValue = document.getElementById("sliderValue")

slider.addEventListener("input", function() {
    sliderValue.textContent = slider.value;
});