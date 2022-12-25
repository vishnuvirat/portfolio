import { projectQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { Project } from "../typings";

export const fetchProjects = async () => {
  const projects: Project[] = await sanityClient.fetch(projectQuery);

  // console.log("fetching", projects);

  return projects;
};
