import { cache } from "react";
import { z } from "zod";

const serverSideEnvSchema = z.object({
  websiteUrl: z.string(),
});

function getServerSideEnvFn() {
  return serverSideEnvSchema.parse({
    websiteUrl: process.env.WEBSITE_URL,
  });
}

export const getServerSideEnv = cache(getServerSideEnvFn);
