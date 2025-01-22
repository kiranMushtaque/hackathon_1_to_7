import { createClient } from "@sanity/client";

// Define the client configuration
const sanityClient = createClient({
  projectId: "n1ienwu6", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2023-01-01", // Use today's date or the API version you rely on
  useCdn: true, // Enable for faster responses; disable if you need fresh data
});

export default sanityClient;
