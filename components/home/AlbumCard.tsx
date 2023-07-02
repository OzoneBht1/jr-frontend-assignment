import { IAlbum, IItem, ITrack } from "@/types/interface/trendingSongs";
import Image from "next/image";

interface IAlbumCardProps {
  item: IItem;
}
export default function AlbumCard({ item }: IAlbumCardProps) {
  console.log(item.track);
  console.log(item.track.album.images[0].url);
  return (
    <div className="flex flex-col w-40">
      <Image
        loader={({ src }) => src}
        src={item.track.album.images[0].url}
        alt="album-cover"
        className="w-full h-40"
        width={30}
        height={30}
      />
      <div>
        <p>{item.track.explicit && "explicit"}</p>
        <p>{item.track.album.name}</p>
        {item.track.artists.map((artist) => (
          <p>{artist.name}</p>
        ))}
        <p>{item.track.duration_ms}</p>
        <p>{item.track.album.album_type}</p>
        <p>{item.track.popularity}</p>
      </div>
    </div>
  );
}
