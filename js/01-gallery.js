import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemHTML = `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`;
  gallery.insertAdjacentHTML("beforeend", listItemHTML);
});

const lightbox = basicLightbox.create(`
  <img class="gallery__image" src="" alt="" />
`);

const imagesModal = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const imgSrc = e.target.dataset.source;
    const imgAlt = e.target.alt;
    lightbox.element().querySelector("img").src = imgSrc;
    lightbox.element().querySelector("img").alt = imgAlt;
    lightbox.show();
  }
};

gallery.addEventListener("click", imagesModal);
gallery.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    lightbox.close();
  }
});
