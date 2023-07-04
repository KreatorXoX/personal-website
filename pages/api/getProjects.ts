import { Project } from "@/typings";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/utils/groqs";

export default async function getProjects() {
  try {
    const projects: Project[] = await client.fetch(projectsQuery);
    return projects;
  } catch (error) {
    console.log("error fetching the projects info");
    throw new Error();
  }
}
