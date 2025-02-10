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
