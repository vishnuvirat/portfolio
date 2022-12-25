import { skillQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { Skill } from "../typings";

export const fetchSkills = async () => {
  const data = await sanityClient.fetch(skillQuery);
  const skills: Skill[] = data.skills;

  return skills;
};
