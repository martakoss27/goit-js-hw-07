import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

let instance = null;

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="">
        <img
          class="gallery__image"
          src= "${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`
  );
  instance.show();
});

gallery.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    instance.close();
  }
});
