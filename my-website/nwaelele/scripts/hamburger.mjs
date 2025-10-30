function hamburger() {
    const hambutton = document.querySelector("#ham");
    const menu = document.querySelector(".nav");
    const header = document.querySelector("header");
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")

    hambutton.addEventListener("click", ()=> {
        hambutton.classList.toggle("show");
        menu.classList.toggle("show");
        header.classList.toggle("show");
        main.classList.toggle("show");
        footer.classList.toggle("show");        
    });

    menu.addEventListener("click", ()=> {
        hambutton.classList.toggle("show");
        menu.classList.toggle("show");
        header.classList.toggle("show");
        main.classList.toggle("show");
        footer.classList.toggle("show");        
    }); 
}

export default hamburger;