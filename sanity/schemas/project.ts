import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "projectName",
      title: "Project Name",
      type: "string",
    }),
    defineField({
      name: "technologiesUsed",
      title: "Technologies Used",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "skill" } })],
    }),
    defineField({
      name: "projectDate",
      title: "Project Date",
      type: "string",
    }),
    defineField({
      name: "projectSummary",
      title: "Project Summary",
      type: "string",
    }),
    defineField({
      name: "projectLink",
      title: "Project Link",
      type: "url",
    }),
  ],
});
