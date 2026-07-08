const generateBtn = document.getElementById("generateBtn");
const loader = document.getElementById("loader");
const outputBox = document.getElementById("outputBox");
const generatedImage = document.getElementById("generatedImage");
const downloadBtn = document.getElementById("downloadBtn");
const promptInput = document.getElementById("promptInput");
const styleSelect = document.getElementById("styleSelect");
const transparentBg = document.getElementById("transparentBg");

generateBtn.addEventListener("click", async () => {

    const prompt = promptInput.value.trim();
    const style = styleSelect.value;
    const transparent = transparentBg.checked;

    if (!prompt) {
        alert("Please enter a prompt.");
        return;
    }

    generateBtn.disabled = true;
    loader.style.display = "block";
    outputBox.style.display = "none";

    try {

        let finalPrompt = prompt;

        if (style !== "none") {
            finalPrompt += ", " + style + " style";
        }

        if (transparent) {
            finalPrompt += ", transparent background";
        }

        // Random value so browser doesn't cache old image
        const seed = Date.now();

        const imageUrl =
            `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}?seed=${seed}`;

        generatedImage.onload = () => {
            loader.style.display = "none";
            outputBox.style.display = "block";
            generateBtn.disabled = false;
        };

        generatedImage.onerror = () => {
            loader.style.display = "none";
            generateBtn.disabled = false;
            alert("Image generation failed. Please try again.");
        };

        generatedImage.src = imageUrl;

    } catch (err) {

        loader.style.display = "none";
        generateBtn.disabled = false;

        console.error(err);

        alert("Something went wrong.");

    }

});

downloadBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = generatedImage.src;
    link.download = "AI-Image.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});
