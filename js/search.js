function getCards(){
    return document.querySelectorAll(".asset-card");
}

// ---------------- SEARCH ----------------
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        getCards().forEach(card => {

            const name = card.dataset.name || "";

            if (name.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
}


// ---------------- FILTER ----------------
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        getCards().forEach(card => {

            const type = card.dataset.type || card.dataset.category || "all";

            if (filter === "all" || type === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });

});
