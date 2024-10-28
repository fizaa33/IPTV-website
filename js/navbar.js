function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Error loading ${filePath}`);
            return response.text();
        })
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error(error));
}

// Load navbar and footer once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("navbar", "navbar.html");
    loadHTML("footer", "footer.html");
});