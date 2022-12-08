
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {fetchCategories, fetchFolders, fetchArticles} from "~/helpers/fetchFreshdesk";

// Merge articles and send to UI
export const loader: LoaderFunction = async () => {
  const allArticles = [];
  const categories = await fetchCategories();
  
  for await (const category of categories) {
    const categoryFolders = await fetchFolders(category.id);
    for await (const folder of categoryFolders) {
        const articles = await fetchArticles(folder.id);
        allArticles.push(...articles);
    }
  }
// TODO: Add error handling

  return json(allArticles);
};

