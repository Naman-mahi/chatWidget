// Retrieve the user's theme preference from localStorage
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';
// Immediately apply the theme based on the stored preference
updateTheme(); 
// Set initial mode on page load (This may be redundant now)
document.addEventListener("DOMContentLoaded", function () {
    updateTheme();
});
// Dark mode toggle functionality (Remains the same)
document.getElementById("toggleMode").onclick = function () {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    updateTheme();
};
// Function to update theme based on isDarkMode
function updateTheme() {
    document.body.style.backgroundColor = isDarkMode ? "var(--bg-color-dark)" : "var(--bg-color-light)";
    document.body.style.color = isDarkMode ? "var(--text-color-dark)" : "var(--text-color-light)";

    document.querySelectorAll(".badge").forEach((badge) => {
        badge.style.color = isDarkMode ? "var(--text-color-light)" : "var(--text-color-dark)";
        badge.style.backgroundColor = isDarkMode ? "rgba(255, 255, 255, var(--badge-bg-opacity))" : "rgba(0, 0, 0, var(--badge-bg-opacity))";
    });

    document.getElementById("toggleMode").textContent = isDarkMode ? "☀️" : "🌙";

    const header = document.querySelector(".header");
    header.style.backgroundColor = isDarkMode ? "var(--bg-color-dark)" : "var(--bg-color-light)";
    header.style.color = isDarkMode ? "var(--text-color-dark)" : "var(--text-color-light)";

    document.querySelectorAll(".card-body").forEach((cardBody) => {
        cardBody.style.backgroundColor = isDarkMode ? "var(--bg-color-dark)" : "var(--bg-color-light)";
        cardBody.style.color = isDarkMode ? "var(--text-color-dark)" : "var(--text-color-light)";
    });

    const tabContent = document.getElementById("profileTabsContent");
    tabContent.style.backgroundColor = isDarkMode ? "var(--bg-color-dark)" : "var(--bg-color-light)";
    tabContent.style.color = isDarkMode ? "var(--text-color-dark)" : "var(--text-color-light)";
}
