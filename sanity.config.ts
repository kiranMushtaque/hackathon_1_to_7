"use client";

/**
 * This configuration is used to configure the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route.
 */

import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk"; // Updated import for structure tool

import { apiVersion } from "./sanity/env";
import { dataset } from "./sanity/env";
import { projectId } from "./sanity/env";

import { schema } from "./sanity/schemaTypes"; // Import your schema configuration

// Use the correct structure tool approach for v3
export default defineConfig({
  basePath: "/studio", // The base path for the Studio
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(), // This is the new structure tool for managing content types
    // Vision plugin is used to query with GROQ from inside the Studio
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
