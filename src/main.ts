import "./style.css";
import { fetchImagesFromAPI } from "./fetchImagesAPI";
import { PhotoSearchAPIResult } from "./fetchImagesAPI";
import { render, html, nothing } from "lit-html";

async function onFormSubmit(event: SubmitEvent) {
  event.preventDefault()
  if (!event.target) {
    return
  }
  const formData = new FormData(event.target as HTMLFormElement);
  const query = formData.get('search-query');if (query) {...}
}

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

renderApp()