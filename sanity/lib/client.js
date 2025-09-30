import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || process.env.SANITY_STUDIO_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || "2024-09-18",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
