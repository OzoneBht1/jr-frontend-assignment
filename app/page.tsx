import React from "react";
import SplashScreen from "@/components/home/SplashScreen";
import TrendingAlbums from "@/components/home/TrendingAlbums";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { spotifyActions } from "@/store/reducers/spotifyReducer";
import { IToken } from "@/types/interface/token";
import Head from "next/head";
import { access } from "fs";
export default async function Home() {
  return (
    <div>
      <Head>
        <title>Music Sansar</title>
      </Head>
      <SplashScreen />
      <TrendingAlbums />
    </div>
  );
}
