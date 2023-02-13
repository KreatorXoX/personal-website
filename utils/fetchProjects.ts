import { Project } from "@/typings";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    );

    if (!res.ok) {
      throw new Error("fetchin projects info failed");
    }

    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
  } catch (error) {
    console.log(error);
    throw new Error("fetchin projects info failed");
  }
};
