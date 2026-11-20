import { renderVideoGrid } from './render-video.js';
import { loadVideos, loadVideoFetch, loadSearchedVideo } from '../../data/videos.js';
import { loadChannelFetch, getChannel } from '../../data/channels.js';

async function loadIndexPage() {
    await loadVideoFetch();
    await loadSearchedVideo();
    await loadChannelFetch();
    renderVideoGrid(loadVideos());
};

loadIndexPage();