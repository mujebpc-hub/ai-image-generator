const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../data/assets.json")
.then(response => response.json())
.then(data => {

    const asset = data.find(item => item.id == id);

    document.getElementById("previewImg").src = asset.image;
    document.getElementById("title").innerText = asset.name;

    document.getElementById("lowDownload").onclick = () => {
        window.location.href = asset.image;
    };

    document.getElementById("highDownload").onclick = () => {
        alert("Watch ad to unlock HQ Download");

        setTimeout(() => {
            window.location.href = asset.highQuality;
        }, 5000);
    };

    document.getElementById("shareBtn").onclick = () => {
        navigator.share({
            title: asset.name,
            url: window.location.href
        });
    };

});
