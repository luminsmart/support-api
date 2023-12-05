import type { ActionArgs } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { cors } from "remix-utils";
import { json } from "@remix-run/node";
import { postLogs } from "../helpers/redis";

export async function action(args: ActionArgs) {
  const data = await args.request.json();
  // if (!email || !metadata) throw new Error("Required field not provided");
  return await cors(args.request, json(postLogs(data)));
}

export const loader: LoaderFunction = async ({ request }) => {
  return await cors(request, json({ ok: true }));
};
