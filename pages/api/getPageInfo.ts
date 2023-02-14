import type { NextApiRequest, NextApiResponse } from "next";
import { PageInfo } from "@/typings";

import { client } from "../../lib/client";

const query = `
*[_type=='pageInfo'][0]{
...,
socials[]->,typewriterInfo->
}
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
