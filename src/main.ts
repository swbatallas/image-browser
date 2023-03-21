import "./style.css";
import { fetchImagesFromAPI } from "./fetchImagesAPI";
import { render, html } from "lit-html";

fetchImagesFromAPI("dogs", 5).then((data) => {
  const htmlToRender = html`
    <h1>Results for 'dogs'</h1>
    <ul>
      ${data.photos.map((photo) => {
        return html`<li><img src=${photo.src.small} /></li>`;
      })}
    </ul>
  `;
  const div = document.getElementById("app");
  if (!div) {
    throw new Error("could not find app div");
  }
  render(htmlToRender, div);
});