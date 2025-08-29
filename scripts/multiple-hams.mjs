// Arthur: Destiny Linus
// Purpose: Create Multiple toggle
/*
Plan:
1. select all the arrow element
2. loop through each arrow
3. for each arrow toggle it direction when clicked
4. for each arrow get the ul element when clicked and display it.
5. You have to navigate to the ul by first going to the parent and then next sibling.
*/

function hams() {
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => {
        arrow.addEventListener("click", ()=> {
            arrow.innerHTML = "&#9662"
            const ul = arrow.parentNode.nextElementSibling;
            const div = arrow.parentNode;
            div.classList.toggle("show");            
            ul.classList.toggle("show");
            arrow.innerHTML = ul.classList.contains("show") ? "&#9652" : "&#9662"
        });
    });    
}

export default hams;