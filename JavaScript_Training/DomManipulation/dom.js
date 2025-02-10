

const heading = document.getElementsByClassName("heading")[0];
const button = document.getElementById("button")

button.addEventListener('click',()=>{
    if(heading.textContent === "Click the button")
        heading.textContent = "You Clicked the button"

    else
    heading.innerHTML = "Click the button"
})