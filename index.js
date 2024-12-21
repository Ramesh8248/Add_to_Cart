// Array of product details
const products = [
    { title: "Product 1", image: "https://lh3.googleusercontent.com/proxy/SHhCCybgZ3TU3r3ORVvXR_zlAIzn2kOputkfs5MvkC7Ek8TWOv4jC8Y3_oKd9G60m3JiEA35UmC9SBg--085eZXpLz0klIU24z9hFmg09amphdKGoRyE42zAdw", description: "Description of Product 1" },
    { title: "Product 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMhO4KWkDMqgMowU-xsSxvLIrSYqmOY3hLw&s", description: "Description of Product 2" },
    { title: "Product 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUozWpzXbFz-ye-8foyDMDs3HvqKU1ZpwHqg&s", description: "Description of Product 3" },
    { title: "Product 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHF2FJmuv4sUmgcMrio3GccwgioxSMzIaoIg&s", description: "Description of Product 4" },
    { title: "Product 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguzqsryCr9I2VXlIKnR4FCxUwIytOmK1Kmw&s", description: "Description of Product 5" },
    { title: "Product 6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQu5qomw0OYtOzbUJjJ5M_m7gKFb_e26T-sg&s", description: "Description of Product 6" },
    { title: "Product 7", image: "https://t2.sdlcdn.com/imgs/k/u/o/850X995_sharpened_2_1/COREGENIX-Ultrapods-3-Bluetooth-True-SDL123726484-1-0e11a.webp", description: "Description of Product 7" },
    { title: "Product 8", image: "https://img.clevup.in/250514/1681289514346_SKU-0505_0.png", description: "Description of Product 8" },
    { title: "Product 9", image: "https://5.imimg.com/data5/SELLER/Default/2024/4/408421090/QQ/VU/GB/30928744/boat-airdopes-381-500x500.jpg", description: "Description of Product 9" },
    { title: "Product 10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybhyYF1rqwonnme_WhMFoif4R1vI9vBmgrQ&s", description: "Description of Product 10" },
    { title: "Product 11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnq8mDVDsazy_grPnRgDU33ixRj-7jX4XFw&s", description: "Description of Product 11" },
    { title: "Product 12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8BYUVPYuW4cgADNGq-oIWSoeKNRBQj7qVA&s", description: "Description of Product 12" },
    { title: "Product 13", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zYI4ujsZcaEhf7mBNCR84D6_bbvoRUZ5EA&s", description: "Description of Product 13" },
    { title: "Product 14", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKbf-ztkEWaME0KhNpv292R0nsH_5WT08-w&s", description: "Description of Product 14" }
];


const cardContainer = document.getElementById("card-container");


products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button id="cartbtn">Add to Cart</button>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);
});

let count = 0;
const countvalue = document.getElementById('count');
const buttons = document.querySelectorAll('button#cartbtn');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        countvalue.textContent = count;
    });
});
