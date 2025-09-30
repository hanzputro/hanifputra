import { ChartUpwardIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
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
      name: "design",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "skillCollection" },
          options: {
            filter: "category == $category",
            filterParams: { category: "design" },
          },
        }),
      ],
    }),
    defineField({
      name: "code",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "skillCollection" },
          options: {
            filter: "category == $category",
            filterParams: { category: "code" },
          },
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
