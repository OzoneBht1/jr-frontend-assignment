"use client";

import { getAlbum } from "@/queryFns/getAlbum";
import { useAppSelector } from "@/store/hooks";
import { IAlbum } from "@/types/interface/trendingSongs";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Badge from "@/components/UI/Badge";
import { convertMsToMinsSecs } from "@/utils/timeUtils";
import { FiPlayCircle } from "react-icons/fi";

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
      <div className="flex text-sm justify-center h-96 mt-5">
        <div className="flex w-1/2 justify-center items-start">
          <div className="flex flex-col gap-3 w-2/5 h-full">
            <div className="flex items-center gap-3">
              <p className="text-2xl">Popularity:</p>
              <Badge color="white" bgColor="blue-500" height={12} width={12}>
                {album?.popularity}
              </Badge>
            </div>
            <div className="flex flex-col w-full gap-2 border-b-2 border-slate-200">
              <p className="text-4xl font-bold">{album?.name}</p>
              <p className="text-2xl">
                by{" "}
                <span className="text-blue-500 font-semibold text-3xl">
                  {album && album.artists && album?.artists[0]?.name}
                </span>
              </p>
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
        <div className="w-2/5 md:w-1/2 h-3/5 sm:h-4/5 sm:w-2/5 md:h-full">
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

      <div className="flex justify-center mt-20">
        <div className="flex w-4/5 justify-center border-2 border-black">
          <table className="table-fixed w-full">
            <thead className="bg-slate-400">
              <tr>
                <th align="left">Track</th>
                <th className="py-1">Duration</th>
                <th>Explicit</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {album?.tracks?.items?.map((track) => (
                <tr className="border-b-2 border-slate-200" key={track.id}>
                  <td align="left">{track.name}</td>
                  <td align="center">
                    {track.duration_ms &&
                      convertMsToMinsSecs(track.duration_ms)}
                  </td>
                  <td align="center">{track?.explicit ? "Yes" : "No"}</td>
                  <td align="center">
                    {track.preview_url && (
                      <audio controls className="w-3/4 py-2">
                        <source src={track.preview_url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    )}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
