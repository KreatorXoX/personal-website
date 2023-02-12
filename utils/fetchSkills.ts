import { Skill } from "@/typings";

export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    );

    if (!res.ok) {
      throw new Error("fetchin skills failed");
    }

    const data = await res.json();
    const skills: Skill[] = data.skills;
    return skills;
  } catch (error) {
    console.log(error);
    throw new Error("fetchin skills failed");
  }
};
