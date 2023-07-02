import { IAlbum } from "@/types/interface/trendingSongs";
import Image from "next/image";
import Link from "next/link";

interface ISearchedAlbumProps {
  item: IAlbum;
}

export default function SearchedAlbumCard({ item }: ISearchedAlbumProps) {
  return (
    <div className="flex gap-3 border-2 w-full border-black-500 h-60 flex-1 relative group hover:opacity-80">
      <Image
        loader={({ src }) => src}
        src={item.images[0].url}
        alt="album-cover"
        className="w-60 h-full"
        width={64}
        height={64}
      />
      <div className="flex flex-col gap-4">
        <p className="text-md">
          Artist(s) Name:{" "}
          {item && item.artists && item.artists?.length > 1 ? (
            item.artists.map((artist, index) => (
              <span key={index} className="text-lg">
                {artist.name}
                {index !== item?.artists!.length - 1 && ", "}k
              </span>
            ))
          ) : (
            <span className="text-lg">
              {item && item.artists && item?.artists[0].name}
            </span>
          )}
        </p>
        <p>Album Name : {item.name}</p>
        <p>Total Tracks: {item.total_tracks}</p>
        <p>Release Date : {item.release_date}</p>
        <Link href={`/album/${item.id}`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-28">
            Visit
          </button>
        </Link>
      </div>
    </div>
  );
}
