export const getSearchedResults = async (
  accessToken: string,
  text: string,
  limit?: string,
  offset?: string
) => {
  const params = new URLSearchParams();
  params.append("q", text);
  params.append("type", "album");
  if (limit) {
    params.append("limit", limit);
  }
  console.log(limit, offset);
  if (offset) {
    params.append("skip", offset);
  }
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search/?${params.toString()}`,
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
