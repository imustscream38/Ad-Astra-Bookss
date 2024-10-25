document.addEventListener("DOMContentLoaded", function () {
    const items = [
        { name: "Book A", price: 12.99 },
        { name: "Book B", price: 8.50 },
        { name: "Book C", price: 15.00 }
    ];

    const itemsList = document.getElementById("items-list");
    const totalPriceElement = document.getElementById("total-price");

    let totalPrice = 0;

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        itemsList.appendChild(listItem);

        totalPrice += item.price;
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    const form = document.getElementById("checkout-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Order placed successfully!");
    });
});

