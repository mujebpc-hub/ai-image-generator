import { generateWithPollinations } from "./pollinations.js";
import { APP_CONFIG } from "../../js/config.js";

export async function generateImage(prompt, options = {}) {

    switch (APP_CONFIG.imageProvider) {

        case "pollinations":
            return await generateWithPollinations(prompt, options);

        default:
            throw new Error("Image provider not supported.");

    }

}
