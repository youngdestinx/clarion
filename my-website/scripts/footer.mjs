function footer() {
    const curentYear = document.getElementById("curr-date");
    const lastModified = document.getElementById("Last");

    const today = new Date().getFullYear();
    const modified = new Date(document.lastModified);

    curentYear.textContent = `©${today}`;
    lastModified.textContent = `Last Modified: ${modified}`;
}

export default footer;