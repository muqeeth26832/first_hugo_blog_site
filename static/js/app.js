const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

const ball = document.querySelector(".ball");
document.body.className = mode;

ball.addEventListener("click",()=>{
  localStorage.setItem("mode", mode=="light"? "" : "light");
  body.classList.toggle("light");
})


