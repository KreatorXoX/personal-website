import { Social } from "@/typings";

export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    );

    if (!res.ok) {
      throw new Error("fetchin socials info failed");
    }

    const data = await res.json();
    console.log(data);
    const socialsInfo: Social[] = data.socials;
    return socialsInfo;
  } catch (error) {
    console.log(error);
    throw new Error("fetchin socials info failed");
  }
};
