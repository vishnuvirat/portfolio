import { projectQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { Project } from "../typings";

export const fetchProjects = async () => {
  const data = await sanityClient.fetch(projectQuery);

  const projects: Project[] = data.projects;

  // console.log("fetching", projects);

  return projects;
};
