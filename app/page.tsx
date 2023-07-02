import React from "react";
import SplashScreen from "@/components/home/SplashScreen";
import TrendingAlbums from "@/components/home/TrendingAlbums";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { spotifyActions } from "@/store/reducers/spotifyReducer";
import { IToken } from "@/types/interface/token";
import Head from "next/head";
import getQueryClient from "@/utils/getQueryClient";
import { access } from "fs";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getSpotifyAccess } from "@/queryFns/getSpotifyAccess";
import { ReactQueryHydrate } from "@/utils/ReactQueryHydrate";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["token"], getSpotifyAccess);
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <Head>
        <title>Music Sansar</title>
      </Head>
      <SplashScreen />
      <ReactQueryHydrate state={dehydratedState}>
        <TrendingAlbums />
      </ReactQueryHydrate>
    </div>
  );
}
