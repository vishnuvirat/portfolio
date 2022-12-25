import { socialQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { Socials } from "../typings";

export const fetchSocials = async () => {
  const socials: Socials[] = await sanityClient.fetch(socialQuery);
  // console.log("fetching", socials);

  return socials;
};
