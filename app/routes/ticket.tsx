import type { ActionArgs } from "@remix-run/node";
import { postTicket } from "~/helpers/fetchFreshdesk";

export async function action(args: ActionArgs) {
  const { subject, description, email, metadata } = await args.request.json();
  if (!subject || !description || !email || !metadata)
    throw new Error("Required field not provided");

  return postTicket({ subject, description, email, metadata });
}
