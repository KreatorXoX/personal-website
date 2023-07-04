import { Social } from "@/typings";
import { client } from "@/sanity/lib/client";
import { socialsQuery } from "@/utils/groqs";

export default async function getSocials() {
  try {
    const socials: Social[] = await client.fetch(socialsQuery);
    return socials;
  } catch (error) {
    console.log("error fetching the socials info");
    throw new Error();
  }
}
