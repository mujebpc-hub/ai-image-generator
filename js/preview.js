const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../data/assets.json")
.then(response => response.json())
.then(data => {

    const asset = data.find(item => item.id == id);

    if(!asset){
        document.getElementById("title").innerText = "Asset Not Found";
        return;
    }

    document.getElementById("previewImg").src = asset.preview;
    document.getElementById("title").innerText = asset.title;

    document.getElementById("lowDownload").onclick = () => {
        window.location.href = asset.download_low;
    };

    document.getElementById("highDownload").onclick = () => {
        alert("Watch ad to unlock high quality");

        setTimeout(() => {
            window.location.href = asset.download_high;
        }, 5000);
    };

    document.getElementById("shareBtn").onclick = async () => {
        if(navigator.share){
            await navigator.share({
                title: asset.title,
                url: window.location.href
            });
        }
    };

})
.catch(error => console.log(error));
