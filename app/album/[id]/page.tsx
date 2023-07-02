"use client";

import { getAlbum } from "@/queryFns/getAlbum";
import { useAppSelector } from "@/store/hooks";
import { IAlbum } from "@/types/interface/trendingSongs";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Badge from "@/components/UI/Badge";

export default function Details({ params }: { params: any }) {
  const router = useRouter();
  console.log(params.id);

  if (!params.id) {
    throw new Error("The page you are looking for does not exist");
  }
  const { access_token } = useAppSelector((state) => state.spotify);

  const { data: album, isError: albumIsError } = useQuery<IAlbum>({
    queryKey: ["trendingAlbums"],
    queryFn: () => getAlbum(access_token, params.id),
    enabled: Boolean(access_token) && Boolean(params.id),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  if (albumIsError) {
    throw new Error("The page you are looking for does not exist");
  }

  return (
    <>
      <div className="flex justify-center h-96">
        <div className="w-1/2 flex justify-center items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <p>Popularity:</p>
              <Badge color="white" bgColor="blue-500" height={12} width={12}>
                {album?.popularity}
              </Badge>
            </div>
            <p className="text-md">
              Artist(s): {album && album.artists && album?.artists[0]?.name}
            </p>

            <p className="text-md">
              Album Name: <span className="text-lg">{album?.name}</span>
            </p>

            <p className="text-md">
              Album Type: <span className="text-lg">{album?.album_type}</span>
            </p>
            <p className="text-md">
              Release Date:{" "}
              <span className="text-lg">{album?.release_date}</span>
            </p>

            <p className="text-md">
              Total Tracks:{" "}
              <span className="text-lg">{album?.total_tracks}</span>
            </p>

            <p className="text-md">
              Label: <span className="text-lg">{album?.label}</span>
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            loader={({ src }) => src}
            src={
              album?.images && album?.images?.length > 0
                ? (album?.images[0]?.url as string)
                : ""
            }
            alt="album"
            className="w-96 h-full"
            width={200}
            height={200}
          />
        </div>
      </div>
      {/* {album?.tracks?.items?.map((track) => { */}
      {/*   return ( */}
      {/*     <div key={track.id} className="flex justify-center"> */}
      {/*       {track.name} */}
      {/*     </div> */}
      {/*   ); */}
      {/* })} */}
    </>
  );
}
