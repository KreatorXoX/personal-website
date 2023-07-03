import { defineType, defineField } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "skillName",
      title: "Skill Name",
      type: "string",
    }),
    defineField({
      name: "skillImage",
      title: "Skill Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "masteryLevel",
      title: "Mastery Level",
      type: "number",
      validation: (rule) => {
        return rule.min(0).max(100);
      },
    }),
  ],
});
