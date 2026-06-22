const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".asset-card");

if(searchInput){
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();

        document.querySelectorAll(".asset-card").forEach(card => {
            const name = card.dataset.name;

            if(name.includes(value)){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        document.querySelectorAll(".asset-card").forEach(card => {
            if(filter === "all" || card.dataset.category === filter){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
