let button = document.querySelector("button");

let input = document.querySelector(".input");
console.log(input);

let focus = document.querySelector(".input input")

button.addEventListener("click", () => {
    input.classList.toggle("active");
    focus.focus()
})