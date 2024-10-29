document.addEventListener("DOMContentLoaded", function() {
    // Plan data for each connection type
    const plansData = {
        "1 Connection": [
            { months: 12, price: "£59.99", oldPrice: "£69.99", moneyBack: "14 days" },
            { months: 6, price: "£37.99", oldPrice: "£47.99", moneyBack: "7 days" },
            { months: 3, price: "£26.99", oldPrice: "£34.99", moneyBack: "7 days" },
            { months: 1, price: "£14.99", oldPrice: "£16.99", moneyBack: "7 days" }
        ],
        "2 Connections": [
            { months: 12, price: "£89.99", oldPrice: "£107.99", moneyBack: "14 days" },
            { months: 6, price: "£59.99", oldPrice: "£79.99", moneyBack: "7 days" },
            { months: 3, price: "£39.99", oldPrice: "£59.99", moneyBack: "7 days" },
            { months: 1, price: "£20.99", oldPrice: "£27.99", moneyBack: "7 days" }
        ]
    };

    // Function to create price cards HTML
    function generatePriceCards(connectionType) {
        const cardsContainer = document.getElementById("price-cards-container");
        cardsContainer.innerHTML = ""; // Clear previous cards

        plansData[connectionType].forEach(plan => {
            const card = document.createElement("div");
            card.classList.add("price-card");

            card.innerHTML = `
                ${plan.months === 12 ? '<div class="off-offer">Get 30% OFF</div>' : ''}
                <h3 class="mt-4">${plan.months} Month Plan</h3>
                <span class="mono-text">For ${connectionType}</span>
                <h1 class="real-price">${plan.price}<span class="price-cut">${plan.oldPrice}</span></h1>
                <span class="mono-text">${plan.moneyBack} money back guarantee</span>
                <hr>
                <div class="offer-included">
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>+24,000 live channels</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>+87,000 VOD</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>8K,4K,FHD,HD & SD</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>Hiding identity (proxy protection)</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>PPV channels</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>Anti freeze Technology</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>One time payment, no contract</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>Support 24/7</span></div>
                    <div class="offer-1"><i class="fa-solid fa-circle-check"></i><span>Adult content</span></div>
                </div>
                <button class="contact-us">BUY NOW</button>
            `;
            cardsContainer.appendChild(card);
        });
    }

    // Function to switch between connection types
    function switchPlan(buttonId, connectionType) {
        document.getElementById("deviceBtn1").style.backgroundColor = "#ddd";
        document.getElementById("deviceBtn1").style.color = "black";
        document.getElementById("deviceBtn2").style.backgroundColor = "#ddd";
        document.getElementById("deviceBtn2").style.color = "black";

        document.getElementById(buttonId).style.backgroundColor = "#0DCCD7";
        document.getElementById(buttonId).style.color = "white";

        generatePriceCards(connectionType);
    }

    // Event listeners for buttons
    document.getElementById("deviceBtn1").addEventListener("click", function() {
        switchPlan("deviceBtn1", "1 Connection");
    });
    document.getElementById("deviceBtn2").addEventListener("click", function() {
        switchPlan("deviceBtn2", "2 Connections");
    });

    // Initialize with "1 Connection" plan
    switchPlan("deviceBtn1", "1 Connection");
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




