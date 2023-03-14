// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const divEl = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map(({ preview, original, description }) => {
    return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
  })
  .join("");

divEl.innerHTML = galleryEl;


const lightbox = new SimpleLightbox('.gallery a', { captions:true, captionsData: "alt", captionDelay: 250});






