import { cache } from "react";
import { z } from "zod";

const serverSideEnvSchema = z.object({
  newtCdnApiToken: z.string(),
  newtSpaceUid: z.string(),
  newtAppUid: z.string(),
  websiteUrl: z.string(),
});

function getServerSideEnvFn() {
  return serverSideEnvSchema.parse({
    newtCdnApiToken: process.env.NEWT_CDN_API_TOKEN,
    newtSpaceUid: process.env.NEWT_SPACE_UID,
    newtAppUid: process.env.NEWT_APP_UID,
    websiteUrl: process.env.WEBSITE_URL,
  });
}

export const getServerSideEnv = cache(getServerSideEnvFn);
