// Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {
    const menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Toggle navigation");
    menuButton.setAttribute("aria-expanded", "false");

    navbar.appendChild(menuButton);

    function updateMenuLayout() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = "block";
            navLinks.style.display = "none";
            navLinks.style.flexDirection = "column";
        } else {
            menuButton.style.display = "none";
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "row";
        }

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.style.display === "flex";

        navLinks.style.display = isOpen ? "none" : "flex";
        menuButton.textContent = isOpen ? "☰" : "✕";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
    });

    window.addEventListener("resize", updateMenuLayout);

    updateMenuLayout();

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = "none";
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
