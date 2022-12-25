import { pageInfoQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);


  return pageInfo;
};
