export const getSpotifyAccess = async () => {
  try {
    const params = new URLSearchParams();
    console.log(process.env.NEXT_PUBLIC_CLIENT_ID);
    console.log(process.env.NEXT_PUBLIC_CLIENT_SECRET);
    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID as string);
    params.append(
      "client_secret",
      process.env.NEXT_PUBLIC_CLIENT_SECRET as string
    );

    const response = await fetch(
      `https://accounts.spotify.com/api/token?${params.toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
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
