function hamburger() {
    const hambutton = document.getElementById("ham");
    const menu = document.getElementById("menu");
    const header = document.querySelector("header");
    const info = document.querySelector(".info")
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")

    hambutton.addEventListener("click", ()=> {
        hambutton.classList.toggle("show");
        menu.classList.toggle("show");
        header.classList.toggle("show");
        info.classList.toggle("show");
        main.classList.toggle("show");
        footer.classList.toggle("show");        
    });
}

export default hamburger;