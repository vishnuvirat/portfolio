import { socialQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { Socials } from "../typings";

export const fetchSocials = async () => {
  const data = await sanityClient.fetch(socialQuery);

  const socials: Socials[] = data.socials;

  // console.log("fetching", socials);

  return socials;
};
