import { skillQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { Skill } from "../typings";

export const fetchSkills = async () => {
  const skills: Skill[] = await sanityClient.fetch(skillQuery);
  return skills;
};
