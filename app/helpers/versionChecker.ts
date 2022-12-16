async function get(url: string): Promise<Response> {
  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
}

export const versionChecker = {
  get,
};

export async function getAndroidVersion() {
  const url =
    "https://play.google.com/store/apps/details?id=com.luminsmart.morse&hl=en";
  const response = await get(url);
  console.log(response)
  const json = await response.json();
  console.log(json)

  return json;
}
