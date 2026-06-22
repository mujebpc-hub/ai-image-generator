const container = document.getElementById("assetsContainer");

fetch("../data/assets.json")
.then(response => response.json())
.then(data => {

    data.forEach(asset => {

        const card = document.createElement("div");
        card.classList.add("asset-card");
        card.setAttribute("data-name", asset.name);
        card.setAttribute("data-type", asset.type);

        card.innerHTML = `
            <img src="${asset.image}" alt="${asset.name}">
            <h3>${asset.name}</h3>
            <a href="preview.html?id=${asset.id}">
                <button>View</button>
            </a>
        `;

        container.appendChild(card);
    });

});
