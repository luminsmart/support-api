
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { fetchCategories, fetchFolders, fetchArticles } from "~/helpers/fetchFreshdesk";
import { cors } from "remix-utils"
import { cache } from "~/helpers/cache";

// Merge articles and send to UI
export const loader: LoaderFunction = async ({ request }) => {
  if (cache.has("articles")) {
    let data = cache.get("articles")
    return await cors(request, json(data));
  }
  const allArticles = [];
  const categories = await fetchCategories();

  for await (const category of categories) {
    const categoryFolders = await fetchFolders(category.id);
    for await (const folder of categoryFolders) {
      const articles = await fetchArticles(folder.id);
      allArticles.push(...articles);
    }
  }
  const removeDataAfterSeconds = 3600 // 1 hour
  cache.set("articles", allArticles, removeDataAfterSeconds);
    // TODO: Add error handling

  return await cors(request, json(allArticles));
};


