import "./style.css";
import { fetchImagesFromAPI } from "./pexels";
import { PhotoSearchAPIResult } from "./pexels";
import { render, html, nothing } from "lit-html";
import { renderPhoto } from "./photo-renderer";

async function onFormSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!event.target) {
    return;
  }
  const formData = new FormData(event.target as HTMLFormElement);
  const query = formData.get("search-query");
  if (query && typeof query === "string") {
    const results = await fetchImagesFromAPI(query, 10);
    renderApp(results);
  }
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
            return renderPhoto(photo);
          })
        : nothing}
    </ul>`;
  render(htmlToRender, div);
}

renderApp(null);
