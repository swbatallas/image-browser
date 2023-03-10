/**
 * @param {string} searchTerm
 * @param {number} perPage
 * @param {string} PEXELS_API_KEY
 *  @typedef {Object} Photo
 * @property {{medium: string, large: string, thumbnail: string}} src
 * @typedef {Object} PexelsSearchResponse
 * @property {Array<Photo>} photos
 *
 * @return void
 */


const PEXELS_API_KEY = process.env.PEXELS_API_KEY

async function fetchImages(searchTerm, perPage) {
  const result = await fetch(
    `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=${perPage}`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  );
  const data = await result.json();
  const imagesContainer = document.querySelector("#images-container");
  if (imagesContainer === null) {
    throw new Error("Could not find images-container element.");
  }
  for (const photo of data.photos) {
    const img = document.createElement("img");
    img.src = photo.src.medium;
    imagesContainer.append(img);
  }
}
