import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGallery = document.querySelector(".gallery");
const galleryMarcup = createGalleryItemsMarcup(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", galleryMarcup);

containerGallery.addEventListener("click", onClickImageOpenModal);

function onClickImageOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  showModal(event);
}

function showModal(event) {
  const originalImage = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src=${originalImage} width="800" height="600">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onPressKey);
      },
      onClose: () => {
        window.removeEventListener("keydown", onPressKey);
      },
    }
  );

  instance.show();

  function onPressKey(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

function createGalleryItemsMarcup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt='${description}'
        />
        </a>
    </div>`;
    })
    .join("");
}
