import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("szabad");

export const client = prismic.createClient(endpoint, {
  routes: [],
});
