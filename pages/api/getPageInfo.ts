import { PageInfo } from "@/typings";
import { client } from "@/sanity/lib/client";
import { pageInfoQuery } from "@/utils/groqs";

export default async function getPageInfo() {
  try {
    const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
    return pageInfo;
  } catch (error) {
    console.log("error fetching the page info");
    throw new Error();
  }
}
