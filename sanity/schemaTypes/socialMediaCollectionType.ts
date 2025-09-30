import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const socialMediaCollectionType = defineType({
  name: "socialMediaCollection",
  title: "Social Media",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Url",
      name: "url",
      type: "string",
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
      media: "image",
    },
  },
});
