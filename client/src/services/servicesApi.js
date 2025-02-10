//DELETE QUOTE LOGIG
async function deleteQuote(quoteId) {
  const confirmDelete = confirm("Are you sure you want to delete this quote?");

  if (!confirmDelete) return;
  try {
    const response = await fetch(`/quotes/delete/${quoteId}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.log("Failed to delete quote! Error:" + error);
    alert("Failed to delete the quote!");
  }
}

async function editQuote(quoteId) {
  //SETTING UP FRONT END URL PARAMS AND QUERY STRING
  const params = new URLSearchParams(window.location.search);
  params.set("quote", quoteId);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  history.pushState(null, "", newUrl);

  const optionModal = document.querySelector(".option-modal-wrapper");
  const addQuoteContainer = document.querySelector(".add-quote-wrapper");
  optionModal.style.display = "none";
  addQuoteContainer.style.display = "flex";

  const response = await fetch("quotes/" + quoteId);
  const data = await response.json();
  //form data
  document.querySelector("form #quote").value = data.quote;
  document.querySelector("form #image-url").value = data.imageUrl;
  document.querySelector("form #author").value = data.author;
  document.querySelector("form #category").value = data.category;
  document.querySelector("form #add-quote-btn").textContent = "Save";
}

document
  .querySelector(".form-box form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const quoteId = new URLSearchParams(window.location.search).get("quote");

    if (quoteId) {
      const updatedQuote = {
        quote: document.querySelector("form #quote").value,
        imageUrl: document.querySelector("form #image-url").value,
        author: document.querySelector("form #author").value,
        category: document.querySelector("form #category").value,
      };

      const response = await fetch(`/quotes/edit/${quoteId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedQuote),
        credentials: "include",
      });

      if (response.ok) {
        alert("Quote updated successfully!");
        window.location.href = "/home"; // Redirect to home after a successful update
      } else {
        alert("Failed to update quote!");
      }
    }
  });

// async function saveEditedQuote(quoteId) {
//   try {
//     const response = await fetch(`/quotes/edit/${quoteId}`, {
//       method: "PUT",
//       credentials: "include",
//     });
//     const data = await response.json();
//     alert(data.message);

//     if (response.ok) {
//       location.href = "/home";
//     }
//   } catch (error) {
//     console.log("Failed to delete quote! Error:" + error);
//     alert("Failed to delete the quote!");
//   }
// }

const editMode = true;
