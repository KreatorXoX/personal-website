import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-02-14",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  useCdn: true,
};

export const client = sanityClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
