import { renderVideoGrid } from "../index/render-video.js";
import { loadVideos } from "../../data/videos.js";

const suggetionButtonEl = document.querySelectorAll('.suggestion-button');

suggetionButtonEl.forEach(button => {
  button.addEventListener('click', () => {
    const activeButtonEl = document.querySelector('.active');

    activeButtonEl.classList.remove('active');
    button.classList.add('active');

    renderVideoGrid(loadVideos());
  })
})