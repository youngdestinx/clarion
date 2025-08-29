function sticky() {
    const container = document.querySelector("#menu")
    const children = document.querySelectorAll(".link")

    children.forEach(child => {
        const offset = child.offsetTop - container.offsetTop;
        child.style.position = "sticky";
        child.style.top = `${offset}px`;
    })
}

export default sticky;