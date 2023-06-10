import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="list-item"><img src= ${item.preview} alt= ${item.description} width = 400px ></img></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);
