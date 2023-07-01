"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { spotifyActions } from "@/store/reducers/spotifyReducer";
import { IToken } from "@/types/interface/token";
import { useEffect, useState } from "react";

const getSpotifyAccess = async () => {
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.CLIENT_ID as string);
    params.append("client_secret", process.env.CLIENT_SECRET as string);

    const response = await fetch(
      `https://accounts.spotify.com/api/token?${params.toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export default async function TrendingAlbums() {
  const dispatch = useAppDispatch();
  const { access_token } = useAppSelector((state) => state.spotifyReducer);

  // useEffect(() => {
  //   if (tokenData) {
  //     console.log("Dispatch call soon");
  //     dispatch(spotifyActions.setToken(tokenData));
  //   }
  // }, [tokenData]);

  const tokenData = await getSpotifyAccess();
  console.log(tokenData);
  return (
    <div>
      <p>hello</p>
      <p>{access_token && access_token}</p>
    </div>
  );
}
