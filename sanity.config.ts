"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { RobotIcon, RocketIcon } from "@sanity/icons";
// import myLogo from "@/public/assets/icons/hanifputra.webp";
import { tags } from "sanity-plugin-tags";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { customStructure } from "@/sanity/structure";
import { schema } from "@/sanity/schemaTypes";
// import { MyLogo } from "./components/MyLogo";
// import customTemplates from "./sanity/templates";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || process.env.SANITY_STUDIO_DATASET || '',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  plugins: [
    tags({}),
    structureTool({ structure: customStructure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schema,
    // templates: customTemplates,
  },
  // icon: MyLogo,
});
