import { loadVideos, loadSuggestedVideo } from '../../data/videos.js';

document.querySelector('.youtube-home-link').addEventListener('click',() => {
  window.location.href = 'index.html'
})

const searchInputEl = document.querySelector('.js-search-box');
const searchIconEl = document.querySelector('.js-search-icon');

searchInputEl.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    window.location.href = `index.html?search=${searchInputEl.value}`;
  }
})
searchIconEl.addEventListener('click', (event) => {
  window.location.href = `index.html?search=${searchInputEl.value}`;
});