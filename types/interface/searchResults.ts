import { IAlbum } from "./trendingSongs";

export interface ISearchResults {
  albums: items;
}
export interface items {
  total: number;
  items: IAlbum[];
}
