const homeContainer = document.getElementById("homeAssetsContainer");

if(homeContainer){

    fetch("data/assets.json")
    .then(response => response.json())
    .then(data => {

        // Shuffle random
        const shuffled = data.sort(() => 0.5 - Math.random());

        // Pick max 50
        const selected = shuffled.slice(0, 50);

        selected.forEach(asset => {

            const card = document.createElement("div");
            card.classList.add("asset-card");

            card.innerHTML = `
                <img src="${asset.cover}" alt="${asset.title}">
                <h3>${asset.title}</h3>
                <a href="pages/preview.html?id=${asset.id}">
                    <button>View</button>
                </a>
            `;

            homeContainer.appendChild(card);

        });

    })
    .catch(error => console.log(error));

}
