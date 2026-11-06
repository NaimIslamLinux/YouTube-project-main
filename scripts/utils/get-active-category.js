export function getActiveCategory() {
  const currectActiveCatergoryButtonEl = document.querySelector('.active');
  if(currectActiveCatergoryButtonEl) {
  return currectActiveCatergoryButtonEl.innerHTML;
  } else {
    return 'no-category';
  }
}