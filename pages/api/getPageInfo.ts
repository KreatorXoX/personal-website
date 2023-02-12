import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { PageInfo } from "@/typings";

import { client } from "../../sanity";

const query = groq`
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
