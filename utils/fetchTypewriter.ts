import { Typewriter } from "@/typings";

export const fetchTypewriter = async (): Promise<Typewriter> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTypewriter`
    );

    if (!res.ok) {
      throw new Error("fetchin typewriter info failed");
    }

    const data = await res.json();
    console.log(data);
    const typewriterInfo: Typewriter = data.typewriterInfo;
    return typewriterInfo;
  } catch (error) {
    console.log(error);
    throw new Error("fetchin typewriter info failed");
  }
};
