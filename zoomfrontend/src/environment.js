let IS_PROD = true;
const server = IS_PROD ?
    "https://video-conferencing-wg18.onrender.com" :

    "http://localhost:8000"


export default server;