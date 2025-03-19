// Add interactive behavior (Optional)
document.querySelector(".dropbtn").addEventListener("click", function() {
    document.querySelector(".dropdown-content").classList.toggle("show");
});

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(drop => {
            if (drop.classList.contains("show")) {
                drop.classList.remove("show");
            }
        });
    }
};
