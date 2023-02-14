import { PageInfo } from "@/typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    console.log(res);

    if (!res.ok) {
      throw new Error("fetchin page info failed");
    }

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;
  } catch (error) {
    console.log(error);
    throw new Error("fetchin page info failed");
  }
};
