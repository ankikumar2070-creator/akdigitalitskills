// Welcome Message
console.log("Welcome to AK Digital IT Skills");

// Show message when page loads
window.onload = function () {
    alert("Welcome to AK Digital IT Skills!");
};

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
