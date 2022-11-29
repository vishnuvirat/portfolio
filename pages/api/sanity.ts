import {createClient} from "next-sanity"

import createImageBuilder from "@sanity/image-url"

export const config = {
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId :'3gsfgfso',
  apiVersion : "v2021-10-21",
  useCdn : process.env.NODE_ENV === 'production',
}


export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageBuilder(config).image(source);