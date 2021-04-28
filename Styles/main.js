const burger = document.querySelector(".burger");
/* const links = document.querySelectorAll(".links"); */
const links = document.querySelector(".mobile");
const navLinks = document.querySelectorAll("a");
const background = document.querySelector("html");

/* burger.addEventListener("click", ()=>{
    links.forEach(focus =>{
        focus.classList.toggle("link-open");
        
    })
    burger.classList.toggle("toggle");
});




navLinks.forEach(event =>{
    links.forEach(link =>{
        event.addEventListener("click",()=>{
            link.classList.toggle("link-open");
            burger.classList.toggle("toggle");
        });
    })
        
}) */

burger.addEventListener("click",()=>{
    links.classList.toggle("link-open");
    burger.classList.toggle("toggle");
    background.classList.toggle("trans");
})

navLinks.forEach(event=>{
    event.addEventListener("click",()=>{
        links.classList.toggle("link-open");
        burger.classList.toggle("toggle");
    })
})