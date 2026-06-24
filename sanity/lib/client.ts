import { createClient } from "next-sanity"

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env"

// Fall back to a placeholder so the client can be created before the project
// ID is configured. Queries are short-circuited via `isSanityConfigured`.
export const client = createClient({
  projectId: isSanityConfigured ? projectId : "placeholder",
  dataset: isSanityConfigured ? dataset : "production",
  apiVersion,
  useCdn: true,
})
