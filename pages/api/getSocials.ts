import type { NextApiRequest, NextApiResponse } from "next";

import { Social } from "@/typings";

import { client } from "../../lib/client";

const query = `
*[_type=='social']
`;

type Data = {
  socials: Social[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await client.fetch(query);
  res.status(200).json({ socials });
}
