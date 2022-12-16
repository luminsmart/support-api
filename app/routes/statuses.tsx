
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { cors } from "remix-utils"
import { fetchBanners, fetchDialogs } from "~/helpers/redis"

export const loader: LoaderFunction = async ({ request }) => {
  const banners = await fetchBanners()
  const dialogs = await fetchDialogs()
  return await cors(request, json({
    "banners": banners,
    dialogs: dialogs,
  }));
};
