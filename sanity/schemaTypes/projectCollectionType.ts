import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectCollectionType = defineType({
  name: "projectCollection",
  title: "Projects",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "url",
      type: "string",
    }),
    defineField({
      name: "job",
      type: "tags",
      options: {
        predefinedTags: [
          { label: "Frontend Developer", value: "frontend-developer" },
          { label: "Fullstack Developer", value: "fullstack-developer" },
          { label: "Designer", value: "designer" },
        ],
      },
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "thumbnailHeight",
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
      media: "thumbnail",
    },
  },
});
