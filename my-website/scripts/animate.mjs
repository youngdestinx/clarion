function animate(selectors) {
    const elements = document.querySelectorAll(selectors)
    
    function views(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
        );
    }

    window.addEventListener("scroll", () => {
        elements.forEach(element => {
            if (views(element) && !element.classList.contains("animate")) {
                element.classList.add("animate")
            } 
        });
    });

    elements.forEach(element => {
        if (views(element)) {
            element.classList.add("animate")
        }
    })
}

export default animate;
