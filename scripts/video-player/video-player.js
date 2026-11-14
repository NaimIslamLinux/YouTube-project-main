import { loadVideoFetch } from "../../data/videos.js";
import { renderOtherVideoGrid } from "./other-video.js";
import { updatePlayerHtml } from "./player-section.js";
import { loadChannelFetch } from "../../data/channels.js";

async function renderPage() {
    await loadVideoFetch();
    await loadChannelFetch();
    updatePlayerHtml();
    renderOtherVideoGrid();
};

renderPage();