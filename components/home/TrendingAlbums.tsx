"use client";

import { getSpotifyAccess } from "@/queryFns/getSpotifyAccess";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { spotifyActions } from "@/store/reducers/spotifyReducer";
import { IToken } from "@/types/interface/token";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function TrendingAlbums() {
  const { access_token } = useAppSelector((state) => state.spotify);
  return (
    <div>
      <p>hello</p>
      {access_token && access_token}
    </div>
  );
}
