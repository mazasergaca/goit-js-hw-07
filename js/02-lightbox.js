import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGallery = document.querySelector(".gallery");
const galleryMarcup = createGalleryItemsMarcup(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", galleryMarcup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

function createGalleryItemsMarcup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            alt='${description}'
          />
        </a>`;
    })
    .join("");
}
