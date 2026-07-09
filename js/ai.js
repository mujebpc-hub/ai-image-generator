import { generateImage } from "../providers/image/manager.js";
import { APP_CONFIG } from "./config.js";

const promptInput = document.getElementById("promptInput");
const styleSelect = document.getElementById("styleSelect");
const ratioSelect = document.getElementById("ratioSelect");
const qualitySelect = document.getElementById("qualitySelect");
const countSelect = document.getElementById("countSelect");
const transparentToggle = document.getElementById("transparentToggle");

const generateBtn = document.getElementById("generateBtn");
const generateAgainBtn = document.getElementById("generateAgainBtn");

const loadingText = document.getElementById("loadingText");
const outputBox = document.getElementById("outputBox");

const generatedImage = document.getElementById("generatedImage");
const downloadBtn = document.getElementById("downloadBtn");

async function generateImage() {

    let prompt = promptInput.value.trim();

    if(prompt===""){
        alert("Please enter a prompt.");
        return;
    }

    let style = styleSelect.value;
    let ratio = ratioSelect.value;
    let quality = qualitySelect.value;
    let transparent = transparentToggle.checked;

    let finalPrompt = prompt;

    finalPrompt += ", " + style;

    finalPrompt += ", aspect ratio " + ratio;

    if(quality==="hd"){
        finalPrompt += ", ultra detailed, 8k";
    }

    if(transparent){
        finalPrompt += ", transparent background";
    }

    loadingText.style.display="block";
    outputBox.style.display="none";

    generateBtn.disabled=true;

    const imageURL = await generateImage(finalPrompt, {
    style,
    ratio,
    quality,
    transparent
});
    generatedImage.onload=function(){

        loadingText.style.display="none";
        outputBox.style.display="block";

        generateBtn.disabled=false;

    };

    generatedImage.onerror=function(){

        loadingText.style.display="none";
        generateBtn.disabled=false;

        alert("Failed to generate image.");

    };

    generatedImage.src=imageURL;

}

generateBtn.addEventListener("click",generateImage);

generateAgainBtn.addEventListener("click",generateImage);

downloadBtn.addEventListener("click",()=>{

    const a=document.createElement("a");

    a.href=generatedImage.src;

    a.download="AI_Image.png";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

});
