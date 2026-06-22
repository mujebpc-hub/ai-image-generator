const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
