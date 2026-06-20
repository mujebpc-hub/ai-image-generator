// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Search Button Logic
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
let searchValue = document.getElementById("searchBox").value.trim().toLowerCase();

```
if(searchValue === ""){
    alert("Please enter something to search.");
    return;
}

// Redirect to assets page with search query
window.location.href = "pages/assets.html?search=" + encodeURIComponent(searchValue);
```

});

// Enter key search support
document.getElementById("searchBox").addEventListener("keypress", function(e){
if(e.key === "Enter"){
searchBtn.click();
}
});

// Category Cards Click Logic
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {
card.addEventListener("click", () => {
let category = card.innerText.toLowerCase();
window.location.href = "pages/assets.html?category=" + encodeURIComponent(category);
});
});

// Open AI Page
function openAI(){
window.location.href = "pages/ai.html";
}

// Asset Card Click Logic
const assetCards = document.querySelectorAll(".asset-card");

assetCards.forEach(card => {
card.addEventListener("click", () => {
window.location.href = "pages/assets.html";
});
});

// Smooth Scroll (future sections support)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();

```
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
});
```

});

