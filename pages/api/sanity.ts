import { ClientConfig, createClient } from "next-sanity";

import createImageBuilder from "@sanity/image-url";

export const config: ClientConfig = {
  dataset: "production",
  projectId: "3gsfgfso",
  apiVersion: "v2021-10-21",
  useCdn: true
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageBuilder({
  clientConfig: config
}).image(source);
