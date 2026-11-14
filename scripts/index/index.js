import { renderVideoGrid } from './render-video.js';
import { loadVideos, loadVideoFetch } from '../../data/videos.js';
import { loadChannelFetch, getChannel } from '../../data/channels.js';

async function loadIndexPage() {
    await loadVideoFetch();
    await loadChannelFetch();
    renderVideoGrid(loadVideos());
};

loadIndexPage();