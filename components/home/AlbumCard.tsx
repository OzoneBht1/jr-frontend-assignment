import { IAlbum, IItem, ITrack } from "@/types/interface/trendingSongs";
import Image from "next/image";
import Link from "next/link";

interface IAlbumCardProps {
  item: IItem;
  idx: string;
}
export default function AlbumCard({ item, idx }: IAlbumCardProps) {
  console.log(item);
  return (
    <Link href="/album/[id]" as={`/album/${idx}`}>
      <div className="flex flex-col h-96 w-50 relative group hover:opacity-80">
        <Image
          loader={({ src }) => src}
          src={item.track.album.images[0].url}
          alt="album-cover"
          className="w-full h-full"
          width={64}
          height={64}
        />
        <div className="text-white text-lg font-bold transition-all z-10 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:backdrop-filter group-hover:backdrop-blur-lg group-hover:translate-y-0 absolute left-0 bottom-0 w-full invisible group-hover:visible">
          {" "}
          <p className="">Album : {item.track.album.name}</p>
          <p className="">
            Artist(s):{" "}
            {item.track.artists.length > 1
              ? item.track.artists.map((artist, index) => (
                  <span key={index} className="text-lg">
                    {artist.name}
                    {index !== item.track.artists.length - 1 && ", "}
                  </span>
                ))
              : item.track.artists.map((artist) => (
                  <span key={artist.id} className="text-lg">
                    {artist.name}
                  </span>
                ))}
          </p>
          <p>Album Type : {item.track.album.album_type}</p>
          <p>Total Tracks : {item.track.album.total_tracks}</p>
        </div>
      </div>
    </Link>
  );
}
