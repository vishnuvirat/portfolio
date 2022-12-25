import { pageInfoQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const data = await sanityClient.fetch(pageInfoQuery);
  const pageInfo: PageInfo = data.pageInfo;

  console.log("pageInfo log", pageInfo);

  return pageInfo;
};
