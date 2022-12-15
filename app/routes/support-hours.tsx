
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { cors } from "remix-utils"

export const loader: LoaderFunction = async ({ request }) => {
    return await cors(request, json({ start: Number(process.env.SUPPORT_START_TIME), end: Number(process.env.SUPPORT_END_TIME) }));
};


