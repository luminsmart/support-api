import { encodedCredentials } from "./encodedCredentials";

async function get(url: string): Promise<Response> {
  return await fetch(process.env.FRESHDESK_URL + url, {
    headers: {
      Authorization: encodedCredentials,
      "Content-Type": "application/json",
    },
    method: "GET",
  });
}

async function post(
  url: string,
  body: BodyInit | null | undefined
): Promise<Response> {
  return await fetch(process.env.FRESHDESK_URL + url, {
    body,
    headers: {
      Authorization: encodedCredentials,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}

export const fetchFreshdesk = {
  get,
  post,
};

// Contains categorieIds and folder ids that we do not want to show
const disallowList = [
  "72000064115",
  "72000359484",
  "72000524641",
  "72000515755",
];

// Get all the categories
// Filter out categories from a disallow list
export async function fetchCategories() {
  const response = await fetchFreshdesk.get("/solutions/categories");
  const json = await response.json();
  const data = json.filter(
    (category: Record<string, unknown>) =>
      !disallowList.includes(category.id as string)
  );
  return data;
}

// Get all folders from within those categories
// Filter out folders from a disallow list
export async function fetchFolders(categoryId: string) {
  const response = await (
    await fetchFreshdesk.get(`/solutions/categories/${categoryId}/folders`)
  ).json();

  const data = response.filter(
    (folder: Record<string, string>) => !disallowList.includes(folder.id)
  );
  return data;
}

// Get all articles for each folder
export async function fetchArticles(folderId: string) {
  const response = await (
    await fetchFreshdesk.get(`/solutions/folders/${folderId}/articles`)
  ).json();
  const data = response.filter(
    (article: Record<string, string>) => !disallowList.includes(article.id)
  );
  return data;
}

export async function postTicket({
  subject,
  description,
  email,
  metadata,
}: {
  subject: string;
  description: string;
  email: string;
  metadata: string;
}) {
  const body = JSON.stringify({
    subject,
    description: description + "\nUSERINFO:\n" + metadata,
    email,
    priority: 1,
    status: 2,
    cc_emails: [],
  });
  return await fetchFreshdesk.post("/tickets", body);
}