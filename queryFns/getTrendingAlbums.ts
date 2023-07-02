export const getTrendingAlbums = async (accessToken?: string) => {
  try {
    const params = new URLSearchParams();
    console.log(accessToken);
    params.append("limit", "20");
    params.append("skip", "0");
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (err) {
    console.log(err);
  }
};
