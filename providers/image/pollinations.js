export async function generateWithPollinations(prompt, options = {}) {

    const seed = Math.floor(Math.random() * 999999999);

    const imageUrl =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${seed}`;

    return imageUrl;

}
