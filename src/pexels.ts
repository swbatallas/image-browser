const PEXELS_API_KEY = "8L0s9HK3ypSMQ2i6l9sQqZobs1n02D39LeFBBKYQ6gaLrZ5Hgr3O5jJp";
export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: string;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}
export interface PhotoSearchAPIResult {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo[];
  next_page: string;
}
export async function fetchImagesFromAPI(
  searchTerm: string,
  perPage: number
): Promise<PhotoSearchAPIResult> {
  const result = await fetch(
    `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=${perPage}`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  );
  const json = (await result.json()) as PhotoSearchAPIResult;
  return json;
}
