import { renderVideoGrid } from './render-video.js';
import { loadVideos, loadVideoFetch } from '../../data/videos.js';

async function loadIndexPage() {
    await loadVideoFetch();
    renderVideoGrid(loadVideos());
};

loadIndexPage();