// ADD NEW QUOTE UI MODAL OPEN CLOSE LOGIC
const addQuoteContainer = document.querySelector(".add-quote-wrapper");
const sidebarCreate = document.querySelectorAll("#create");
const closeBtns = document.querySelectorAll("#close-btn");
const optionModal = document.querySelector(".option-modal-wrapper");

if (window.innerWidth > 600) {
  sidebarCreate[0].addEventListener("click", () => {
    addQuoteContainer.style.display = "flex";
  });
} else {
  sidebarCreate[1].addEventListener("click", () => {
    addQuoteContainer.style.display = "flex";
  });
}

closeBtns.forEach((closeBtn) =>
  closeBtn.addEventListener("click", () => {
    addQuoteContainer.style.display = "none";
    optionModal.style.display = "none";
    const newUrl = window.location.origin + window.location.pathname;
    history.pushState(null, "", newUrl);
    window.location.reload();
  })
);

// QUOTE OPTION BTN LOGIC
const optionBtn = document.querySelectorAll("#option-btn");
optionBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    optionModal.style.display = "flex";
  });
});

//QUOTE OPTION EDIT QUOTE
