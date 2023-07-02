export const getAlbum = async (accessToken?: string, id?: string) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (err) {
    console.log(err);
  }
};
