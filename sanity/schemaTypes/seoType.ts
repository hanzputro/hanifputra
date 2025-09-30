import { ChartUpwardIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "SEO",
  title: "SEO",
  type: "document",
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "url",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "keywords",
      type: "tags",
      options: {
        predefinedTags: [
          {
            label: "Hanif Putra",
            value: "Hanif Putra",
          },
          {
            label: "Portfolio Website",
            value: "Portfolio Website",
          },
          {
            label: "Developer",
            value: "Developer",
          },
          {
            label: "Designer",
            value: "Designer",
          },
          {
            label: "Frontend Developer",
            value: "Frontend Developer",
          },
          {
            label: "Fullstack Developer",
            value: "Fullstack Developer",
          },
          {
            label: "Frontend Engineer",
            value: "Frontend Engineer",
          },
          {
            label: "Fullstack Engineer",
            value: "Fullstack Engineer",
          },
          {
            label: "Web App Developer",
            value: "Web App Developer",
          },
        ],
      },
    }),
    defineField({
      name: "creator",
      type: "string",
    }),
    defineField({
      name: "locale",
      type: "string",
    }),
    defineField({
      name: "type",
      type: "string",
    }),
    defineField({
      name: "openGraphImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "xImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "manifest",
      type: "file",
      options: {
        accept: "application/json",
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
