import { renderVideoGrid } from './render-video.js';
import { loadVideos, loadVideoFetch } from '../../data/videos.js';
import { loadChannelFetch, getChannel } from '../../data/channels.js';

async function loadIndexPage() {
    await loadVideoFetch();
    loadChannelFetch();
    console.log(getChannel('UC6tpyBt63bIKnnwfN78T0Pw'));
    // renderVideoGrid(loadVideos());
};

loadIndexPage();