const BASE_BLOB_URL = "https://9yud8pyafsrrfnzj.public.blob.vercel-storage.com";

export function getBlobUrl(path: string) {
  return `${BASE_BLOB_URL}${path}`;
}