import { renderVideoGrid } from './render-video.js';
import { loadVideos, loadVideoFetch } from '../../data/videos.js';
import { channels, loadChannelFetch } from '../../data/channels.js';

async function loadIndexPage() {
    await loadVideoFetch();
    loadChannelFetch();
    renderVideoGrid(loadVideos());
};

loadIndexPage();