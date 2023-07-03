import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "typewriterInfo",
      title: "TypewriterInfo",
      type: "reference",
      to: [{ type: "typewriter" }],
    }),
    defineField({
      name: "profileImage",
      title: "Profile image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "about",
      title: "About",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "social" } })],
    }),
  ],
});
