import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Typewriter } from "@/typings";

import { client } from "../../sanity";

const query = groq`
*[_type=='typewriter'][0]
`;

type Data = {
  typewriterInfo: Typewriter;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const typewriterInfo: Typewriter = await client.fetch(query);
  res.status(200).json({ typewriterInfo });
}
