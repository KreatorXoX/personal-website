import { Skill } from "@/typings";
import { client } from "@/sanity/lib/client";
import { skillsQuery } from "@/utils/groqs";

export default async function getSkills() {
  try {
    const skills: Skill[] = await client.fetch(skillsQuery);
    return skills;
  } catch (error) {
    console.log("error fetching the skills info");
    throw new Error();
  }
}
