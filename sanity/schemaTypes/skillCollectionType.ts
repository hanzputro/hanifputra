import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skillCollectionType = defineType({
  name: "skillCollection",
  title: "Skills",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Design", value: "design" },
          { title: "Code", value: "code" },
        ],
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
