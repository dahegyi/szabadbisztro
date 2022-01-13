import * as prismic from "@prismicio/client";

export const repositoryName = "szabad";
const endpoint = prismic.getEndpoint(repositoryName);

export const client = prismic.createClient(endpoint, {
  routes: [],
});
