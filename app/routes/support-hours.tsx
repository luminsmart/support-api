
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { cors } from "remix-utils"
import { fetchSupportHours } from "~/helpers/redis"
export const loader: LoaderFunction = async ({ request }) => {
    const supportHours = await fetchSupportHours()
    return await cors(request, json(supportHours));
};


