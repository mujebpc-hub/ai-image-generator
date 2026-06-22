const searchInput = document.getElementById("searchInput");
const assetCards = document.querySelectorAll(".asset-card");

searchInput.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    assetCards.forEach(card => {
        let title = card.dataset.name.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
