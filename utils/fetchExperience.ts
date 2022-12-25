import { sanityClient } from "../lib/sanity";
import { Experience } from "../typings";
import { experienceQuery } from "../lib/queries";

export const fetchExperience = async () => {
  const data = await sanityClient.fetch(experienceQuery);
  const experiences: Experience[] = data.experience;

  return experiences || null;
};
