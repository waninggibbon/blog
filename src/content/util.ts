import { getCollection } from "astro:content";

export const getPublishedPosts = async () => {
  const blogEntries = await getCollection("posts");

  return blogEntries.filter((entry) => entry.data.pubDate !== "tbd");
};
