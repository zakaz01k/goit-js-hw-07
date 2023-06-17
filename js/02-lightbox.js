import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListItems = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

galleryListItems.innerHTML = addGalleryMarkup;

galleryListItems.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
