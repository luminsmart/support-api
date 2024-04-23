// import type { ActionArgs } from "@remix-run/node";
// import type { LoaderFunction } from "@remix-run/node";
// import { postTicket } from "~/helpers/fetchFreshdesk";
// import { cors } from "remix-utils"
// import { json } from "@remix-run/node";


// export async function action(args: ActionArgs) {
//   const { subject, description, email, metadata } = await args.request.json();
//   if (!subject || !description || !email || !metadata)
//     throw new Error("Required field not provided");

//   return await cors(args.request, json(postTicket({ subject, description, email, metadata })))

// }


// //TODO: Why do we need this for the post to work
// export const loader: LoaderFunction = async ({ request }) => {
//   return await cors(request, json({ ok: true }));

// }

import type {  ActionFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { postTicket } from "~/helpers/fetchFreshdesk";
import { cors } from "remix-utils";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const { subject, description, email, metadata } = await request.json();

  if (!subject || !description || !email || !metadata) {
    throw new Error("Required field not provided");
  }

  // Set appropriate CORS headers for the response
  return json(postTicket({ subject, description, email, metadata }), {
    headers: {
      "Access-Control-Allow-Origin": "*", // Replace * with your frontend domain
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  // Set appropriate CORS headers for the response
  return json({ ok: true }, {
    headers: {
      "Access-Control-Allow-Origin": "*", // Replace * with your frontend domain
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
