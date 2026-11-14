import { loadVideoFetch } from "../../data/videos.js";
import { renderOtherVideoGrid } from "./other-video.js";
import { updatePlayerHtml } from "./player-section.js";

async function renderPage() {
    await loadVideoFetch();
    updatePlayerHtml();
    renderOtherVideoGrid();
};

renderPage();