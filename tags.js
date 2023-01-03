const TagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

TagsContainer.addEventListener('click', onTagsContainerClick);


function onTagsContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentActiveBtn = document.querySelector(".tags__btn--active");

    // обычный синтаксис мейнстрим
    // if (currentActiveBtn) {
    //     currentActiveBtn.classList.remove('tags__btn--active');
    // };

    // новый модный синтаксис используется не везде а для проверки что бы скрипт не упал
    currentActiveBtn?.classList.remove('tags__btn--active');

    const nextActiveBtn = e.target
    nextActiveBtn.classList.add("tags__btn--active");
    selectedTag = nextActiveBtn.dataset.value;

    console.log(selectedTag);
}