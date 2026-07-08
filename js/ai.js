const generateBtn = document.getElementById("generateBtn");
const loader = document.getElementById("loader");
const outputBox = document.getElementById("outputBox");
const generatedImage = document.getElementById("generatedImage");
const downloadBtn = document.getElementById("downloadBtn");
const promptInput = document.getElementById("promptInput");
const styleSelect = document.getElementById("styleSelect");
const transparentBg = document.getElementById("transparentBg");

// Generate Logic
generateBtn.addEventListener("click", () => {

```
let prompt = promptInput.value.trim();
let style = styleSelect.value;
let transparent = transparentBg.checked;

if(prompt === ""){
    alert("Please enter a prompt.");
    return;
}

// Show loader
loader.style.display = "block";
outputBox.style.display = "none";

// Fake AI processing
setTimeout(() => {

    loader.style.display = "none";
    outputBox.style.display = "block";

    // Temporary preview switch
   const finalPrompt = encodeURIComponent(`${prompt}, ${style}`);

const imageUrl =
`https://image.pollinations.ai/prompt/${finalPrompt}`;

generatedImage.src = imageUrl;

    console.log("Prompt:", prompt);
    console.log("Style:", style);
    console.log("Transparent:", transparent);

}, 3000);
```

});

// Download Logic
downloadBtn.addEventListener("click", () => {
let imageURL = generatedImage.src;

```
const link = document.createElement("a");
link.href = imageURL;
link.download = "generated-asset.png";
link.click();
```

});

