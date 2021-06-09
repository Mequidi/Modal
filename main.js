const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
// const modalOverlay = document.querySelector(".model-overlay");
const overlay = document.getElementById("overlay");

modalBtn.addEventListener("click",function(){
    overlay.classList.add("show-modal");
})
closeBtn.addEventListener("click",function(){
    overlay.classList.remove("show-modal");
})