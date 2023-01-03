const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

// способ через массив
// const sectedTegs = [];

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  
    const btn = e.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');

    if (isActive) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    };

  // способ через массив
  // sectedTegs.push(e.target.dataset.value);
  // console.log(sectedTegs);
    
    btn.classList.toggle("tags__btn--active");
    console.log(selectedTags);
};
