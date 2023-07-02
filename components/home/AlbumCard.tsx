import { IAlbum, IItem, ITrack } from "@/types/interface/trendingSongs";
import Image from "next/image";
import Link from "next/link";

interface IAlbumCardProps {
  item: IItem;
  idx: string;
}
export default function AlbumCard({ item, idx }: IAlbumCardProps) {
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
        <div className=" transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 absolute left-0 bottom-0 bg-white w-full hidden group-hover:block">
          {" "}
          <p>{item.track.explicit && "explicit"}</p>
          <p>{item.track.album.name}</p>
          {item.track.artists.map((artist) => (
            <p key={artist.id}>{artist.name}</p>
          ))}
          <p>{item.track.album.album_type}</p>
          <p>{item.track.popularity}</p>
        </div>
      </div>
    </Link>
  );
}
