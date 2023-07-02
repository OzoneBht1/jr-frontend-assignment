"use client";

import { getSpotifyAccess } from "@/queryFns/getSpotifyAccess";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { spotifyActions } from "@/store/reducers/spotifyReducer";
import { IToken } from "@/types/interface/token";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function TrendingAlbums() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery<IToken>({
    queryKey: ["token"],
    queryFn: getSpotifyAccess,
    onSuccess: (data) => {
      console.log("SUCCESS CALLED");
      dispatch(spotifyActions.setToken(data));
    },
    onError: (error) => {
      console.log("error");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  // useEffect(() => {
  //   if (data) {
  //     dispatch(spotifyActions.setToken(data));
  //   }
  // }, [data]);
  const { access_token } = useAppSelector((state) => state.spotifyReducer);
  // console.log(access_token);

  return (
    <div>
      <p>hello</p>
      {access_token && access_token}
    </div>
  );
}
