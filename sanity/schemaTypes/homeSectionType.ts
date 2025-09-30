import { ChartUpwardIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "textHero",
      type: "tags",
      options: {
        predefinedTags: [
          {
            label: "Bring",
            value: "bring",
          },
          {
            label: "To Life",
            value: "to-life",
          },
        ],
      },
    }),
    defineField({
      name: "textShadow",
      type: "tags",
      options: {
        predefinedTags: [
          {
            label: "FRONTEND",
            value: "frontend",
          },
          {
            label: "ENGINEER",
            value: "engineer",
          },
          {
            label: "DEVELOPER",
            value: "developer",
          },
        ],
      },
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "slogan",
      type: "tags",
      options: {
        predefinedTags: [
          {
            label: "Design",
            value: "design",
            color:
              "linear-gradient(60deg, rgba(255,68,111,1) 0%, rgba(255,13,13,1) 100%)",
          },
          {
            label: "Code",
            value: "code",
            color:
              "linear-gradient(60deg, rgba(0,155,119,1) 0%, rgba(0,103,2,1) 100%)",
          },
          {
            label: "Idea",
            value: "idea",
            color:
              "linear-gradient(60deg, rgba(68,204,255,1) 0%, rgba(0,32,250,1) 100%)",
          },
        ],
      },
    }),
    defineField({
      name: "urlSpline",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
