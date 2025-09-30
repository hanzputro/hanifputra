import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const collectionType = defineType({
  name: "collection",
  title: "Collections",
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
      hidden: ({ document, parent, currentUser, value }) => {
        console.log(
          "document:",
          document,
          "parent:",
          parent,
          "currentUser:",
          currentUser,
          "value:",
          value
        );
        return false;
      },
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
      // hidden: ({ document }) => document?.id !== "skill",
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
      // hidden: ({ document }) => document?.id !== "project",
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      // hidden: ({ document }) => document?.name !== "project",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
