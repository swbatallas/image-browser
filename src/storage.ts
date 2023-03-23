export { saveLikes, loadLikes };
export interface SotreUserLikes {
  photos: number[];
  videos: number[];
}

const LOCAL_STORAGE_KEY =
  "8L0s9HK3ypSMQ2i6l9sQqZobs1n02D39LeFBBKYQ6gaLrZ5Hgr3O5jJp";
function saveLikes(likes: SotreUserLikes): void {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(likes));
}

function loadLikes(): SotreUserLikes | null {
  const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}
