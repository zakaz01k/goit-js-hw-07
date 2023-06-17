import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListItems = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${preview}">
            <img src="${preview}" class="gallery__image" data-source="${original}" alt="${description}">
            </a>
          </li>`
    )
    .join("");
}

const addgalleryMarkup = createGalleryMarkup(galleryItems);

galleryListItems.innerHTML = addgalleryMarkup;
galleryListItems.addEventListener("click", onImegeClick);

function onImegeClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width='800'>`);
  instance.show();

  if (instance.visible()) {
    window.addEventListener("keydown", onEscapeClose);
  }

  function onEscapeClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
