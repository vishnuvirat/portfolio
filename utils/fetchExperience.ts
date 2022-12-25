import { sanityClient } from "../lib/sanity";
import { Experience } from "../typings";
import { experienceQuery } from "../lib/queries";

export const fetchExperience = async () => {
  const experiences: Experience[] = await sanityClient.fetch(experienceQuery);

  return experiences || null;
};
