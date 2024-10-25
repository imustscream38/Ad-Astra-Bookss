
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("promoModal");
    const closeModal = document.querySelector('.close');
    const promoButtons = document.querySelectorAll('.promo-button');
    const promoTitle = document.getElementById('promoTitle');
    const promoDetails = document.getElementById('promoDetails');

    const promoContent = {
        promo1: {
            title: "50% Off on Bestsellers",
            details: "Get your hands on the most popular books with a massive 50% discount! Limited time only."
        },
        promo2: {
            title: "Buy 1 Get 1 Free on Select Titles",
            details: "Purchase any book from our selected collection and get another one absolutely free!"
        },
        promo3: {
            title: "New Arrivals - Special Launch Prices",
            details: "Explore our newest arrivals with special prices valid for a limited time only. Don't miss out!"
        }
    };

    promoButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const promo = button.getAttribute('data-promo');
            const content = promoContent[promo];
            
            if (content) {
                promoTitle.textContent = content.title;
                promoDetails.textContent = content.details;
                modal.style.display = "flex"; 
            }
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = "none"; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
