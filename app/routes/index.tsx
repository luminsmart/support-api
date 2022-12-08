import type { LoaderFunction } from "@remix-run/node";
import { fetch, json } from "@remix-run/node";
import { encodedCredentials } from "~/helpers/encodedCredentials";

export const loader: LoaderFunction = async () => {
  var body = {
    email: 'ryan.mason@yourdomain.com',
    subject: 'TEST TICKET',
    description: 'TEST Ticket description.',
    status: 2,
    priority: 1
  }
  
  const response = await fetch(process.env.FRESHDESK_URL + "/api/v2/tickets", {
    body: JSON.stringify(body),
    headers: {
      Authorization: encodedCredentials,
      "Content-Type": "application/json"
    },
    method: "POST"
  })

  // /api/v2/solutions/categories


  return json(await response.json());
};

