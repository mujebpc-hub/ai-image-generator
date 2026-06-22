const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".asset-card");

    cards.forEach(card => {
        const title = card.dataset.name.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
