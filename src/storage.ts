export { saveLikes, loadLikes };
export enum LikedResource {
  Photo = "PHOTO",
  Video = "VIDEO",
}
interface StoredLike {
  id: number;
  resourceType: LikedResource;
}
type StoredLikes = StoredLike[];

const LOCAL_STORAGE_KEY = import.meta.env.PEXELS_API_KEY;

function saveLikes(likes: StoredLikes): void {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(likes));
}

function loadLikes(): StoredLikes | null {
  const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}
