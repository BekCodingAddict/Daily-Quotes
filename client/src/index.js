const addQuoteContainer = document.querySelector(".add-quote-wrapper");
const sidebarCreate = document.querySelectorAll("#create");
const closeBtn = document.getElementById("close-btn");
console.log(sidebarCreate);

if (window.innerWidth > 600) {
  sidebarCreate[0].addEventListener("click", () => {
    addQuoteContainer.style.display = "flex";
  });
} else {
  sidebarCreate[1].addEventListener("click", () => {
    addQuoteContainer.style.display = "flex";
  });
}

closeBtn.addEventListener("click", () => {
  addQuoteContainer.style.display = "none";
});
