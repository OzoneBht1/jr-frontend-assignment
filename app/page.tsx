import React from "react";
import SplashScreen from "@/components/home/SplashScreen";
import TrendingAlbums from "@/components/home/TrendingAlbums";
import Head from "next/head";

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
