document.addEventListener("DOMContentLoaded", function() {
    const plans = {
        deviceBtn1: "price-cards-one",
        deviceBtn2: "price-cards-two"
    };

    // Function to switch plans based on selected button
    function switchPlan(buttonId) {
        // Hide all plans
        for (let key in plans) {
            document.getElementById(plans[key]).style.display = "none";
            document.getElementById(key).style.backgroundColor = "#ddd";
            document.getElementById(key).style.color = "black";
        }

        // Show selected plan and style active button
        document.getElementById(plans[buttonId]).style.display = "flex";
        document.getElementById(buttonId).style.backgroundColor = "#0DCCD7";
        document.getElementById(buttonId).style.color = "white";
    }

    // Attach event listeners to buttons
    document.getElementById("deviceBtn1").addEventListener("click", function() {
        switchPlan("deviceBtn1");
    });
    document.getElementById("deviceBtn2").addEventListener("click", function() {
        switchPlan("deviceBtn2");
    });

    switchPlan("deviceBtn1");
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".first-navbar"); 
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll("#accordion .card");

    cards.forEach(card => {
        const collapseElement = card.querySelector(".collapse");
        const plusIcon = card.querySelector(".fa-plus");
        const minusIcon = card.querySelector(".fa-minus");

        collapseElement.addEventListener("show.bs.collapse", function () {
            plusIcon.style.display = "none";
            minusIcon.style.display = "inline";
        });

        collapseElement.addEventListener("hide.bs.collapse", function () {
            plusIcon.style.display = "inline";
            minusIcon.style.display = "none";
        });
    });
});
