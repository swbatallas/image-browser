export { renderPhoto };
import { Photo } from "./pexels";
import { html } from "lit-html";

function renderPhoto(photo: Photo, onLikeClick: (photoId: number) => void) {
  return html`<li>
    <img src=${photo.src.small} />
    <button class="like" @click=${() => onLikeClick(photo.id)}>Like</button>
  </li>`;
}
