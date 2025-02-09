// ADD NEW QUOTE UI MODAL OPEN CLOSE LOGIC
const addQuoteContainer = document.querySelector(".add-quote-wrapper");
const sidebarCreate = document.querySelectorAll("#create");
const closeBtn = document.getElementById("close-btn");

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

//ADD NEW QUOTE FORM SUBMIT LOGIC
// const addQuoteForm = document.querySelector(".add-quote-wrapper form");

// function handleSubmit(event) {
//   event.preventDefault();
//   const confirmed = confirm("Do you want to create this quote?");
//   if(confirmed)
// }

// LOGOUT LOGIC
