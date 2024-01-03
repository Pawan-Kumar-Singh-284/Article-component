const button = document.querySelector(".share-btn");
const share = document.querySelector(".share");

button.addEventListener("click", () => {
  share.classList.toggle("visible");
  
});

share.addEventListener("mouseleave", () => {
  share.classList.remove("visible");
});
