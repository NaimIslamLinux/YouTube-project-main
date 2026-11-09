import { videos } from '../../data/videos';

let videoGridHtml = ``;

videos.forEach(video => {
    videoGridHtml += 
    `
        <div class="video-preview">
        <div class="left-section">
            <img src="${video.thumbnail}" alt="video thumbnail" class="video-thumbnail">
            <span class="video-duration">5:50</span>
        </div>

        <div class="right-section">
            <h2 class="video-title">
            Nothin nothin nothing nothing nothing nothing
            </h2>
            <p class="channel-name">
            Channel name
            </p>
            <div class="video-state">
            <img class="video-category-icon" src="images/icons/play-solid-full.svg" alt="Play icon">
            <span class="video-views">45K</span>
            <span class="video-uploaded-time">4m ago</span>
            </div>
        <img class="video-more-option" src="images/icons/dot-menu-horizontal-solid-full.svg" alt="video more option">
        </div>
        </div>
    `;
});

console.log(videoGridHtml);