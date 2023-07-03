import { defineType, defineField } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    defineField({
      name: "socialName",
      title: "Social Name",
      type: "string",
    }),
    defineField({
      name: "socialUrl",
      title: "Social Url",
      type: "url",
    }),
  ],
});
