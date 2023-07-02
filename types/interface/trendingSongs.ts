export interface ITrending {
  items: IItem[];
}

export interface IItem {
  added_at: string;
  track: ITrack;
}

export interface ITrack {
  added_at: string;
  name: string;
  duration_ms: string;
  explicit: boolean;
  popularity: number;
  album: IAlbum;
  artists: IArtist[];
}
export interface IAlbum {
  album_type: string;
  images: IImage[];
  name: string;
}

export interface IImage {
  url: string;
  height: number;
  width: number;
}
export interface IArtist {
  id: string;
  name: string;
  type: string;
}