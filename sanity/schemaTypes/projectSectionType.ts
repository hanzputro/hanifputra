import { ChartUpwardIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      name: "textShadow",
      type: "string",
    }),
    defineField({
      name: "project",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "projectCollection" },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
