export {fetchImagesFromAPI}

const PEXELS_API_KEY =
  "8L0s9HK3ypSMQ2i6l9sQqZobs1n02D39LeFBBKYQ6gaLrZ5Hgr3O5jJp";
async function fetchImagesFromAPI(searchTerm: string, perPage: number) {
  const url = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=${perPage}`;
  const result = await fetch(url, {
    headers: {
      Autorizhation: PEXELS_API_KEY,
    },
  });
  const json = await result.json();
  return json;
}
