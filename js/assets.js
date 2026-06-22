const container = document.getElementById("assetsContainer");

fetch("../data/assets.json")
.then(response => response.json())
.then(data => {

    data.forEach(asset => {

        const card = document.createElement("div");
        card.classList.add("asset-card");

        card.setAttribute("data-name", asset.title.toLowerCase());

        card.innerHTML = `
            <img src="${asset.cover}" alt="${asset.title}">
            <h3>${asset.title}</h3>

            <div style="display:flex; gap:8px; flex-direction:column;">

                <a href="${asset.cover}" download>
                    <button>Download</button>
                </a>

                <a href="preview.html?id=${asset.id}">
                    <button>View</button>
                </a>

            </div>
        `;

        container.appendChild(card);

    });

})
.catch(error => console.log(error));
