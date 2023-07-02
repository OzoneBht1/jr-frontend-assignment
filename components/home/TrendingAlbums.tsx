"use client";

import { getTrendingAlbums } from "@/queryFns/getTrendingAlbums";
import { useAppSelector } from "@/store/hooks";
import { ITrending } from "@/types/interface/trendingSongs";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import AlbumCard from "./AlbumCard";

export default function TrendingAlbums() {
  const { access_token } = useAppSelector((state) => state.spotify);
  console.log(access_token);
  const router = useRouter();

  const { data: trendingTracks, isLoading: trendingTracksIsLoading } =
    useQuery<ITrending>({
      queryKey: ["trendingAlbums"],
      queryFn: () => getTrendingAlbums(access_token),
      enabled: Boolean(access_token),
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  console.log(trendingTracks);

  if (trendingTracksIsLoading) {
    return <div>Loading...</div>;
  }

  if (!trendingTracks) {
    return <div>no data</div>;
  }

  return (
    <div className="flex flex-col p-10 gap-10 ml-5 mt-10 items-center">
      <h6 className="text-2xl font-bold md:text-4xl">Trending Albums</h6>
      <div className="flex flex-wrap gap-6 justify-center">
        {trendingTracks?.items?.map((item) => {
          return (
            <AlbumCard
              key={item.track.id}
              item={item}
              idx={item.track.album.id}
            />
          );
        })}
      </div>
    </div>
  );
}
