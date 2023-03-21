export { renderApp };
import { render, html, nothing } from "lit-html";
import { PhotoSearchAPIResult } from "./fetchImagesAPI";

async function onFormSubmit() {};
function renderApp(results: PhotoSearchAPIResult | null): void {
  const div = document.getElementById("app");
  if (!div) {
    throw new Error("could not find app div");
  }
  const htmlToRender = html`<h1>Amazing Photo App</h1>
    <form id="search" @submit=${onFormSubmit}>
      <input type="text" name="search-query" placeholder="dogs" /><input
        type="submit"
        value="Search"
      />
    </form>
    <ul>
      ${results
        ? results.photos.map((photo) => {
            return html`<li><img src=${photo.src.small} /></li>`;
          })
        : nothing}
    </ul>`; 
  render(htmlToRender, div);
}
