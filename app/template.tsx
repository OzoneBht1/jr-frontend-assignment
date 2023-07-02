"use client";

import { getSpotifyAccess } from "@/queryFns/getSpotifyAccess";
import { useAppDispatch } from "@/store/hooks";
import { spotifyActions } from "@/store/reducers/spotifyReducer";
import { IToken } from "@/types/interface/token";
import { useQuery } from "@tanstack/react-query";

export default function Template({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery<IToken>({
    queryKey: ["token"],
    queryFn: getSpotifyAccess,
    onSuccess: (data) => {
      console.log(data);
      dispatch(spotifyActions.setToken(data));
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return <>{children}</>;
}
