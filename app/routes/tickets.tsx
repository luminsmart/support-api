import type { ActionArgs } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { postTicket } from "~/helpers/fetchFreshdesk";
import { cors } from "remix-utils"
import { json } from "@remix-run/node";


export async function action(args: ActionArgs) {
  const { subject, description, email, metadata } = await args.request.json();
  if (!subject || !description || !email || !metadata)
    throw new Error("Required field not provided");

  return await cors(args.request, json(postTicket({ subject, description, email, metadata })))

}


//TODO: Why do we need this for the post to work
export const loader: LoaderFunction = async ({ request }) => {
  return await cors(request, json({ ok: true }));

}