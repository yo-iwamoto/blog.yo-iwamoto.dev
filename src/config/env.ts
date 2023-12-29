import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    newtCdnApiToken: z.string(),
    newtSpaceUid: z.string(),
    newtAppUid: z.string(),
  },
  client: {},
  runtimeEnv: {
    newtCdnApiToken: process.env.NEWT_CDN_API_TOKEN,
    newtSpaceUid: process.env.NEWT_SPACE_UID,
    newtAppUid: process.env.NEWT_APP_UID,
  },
});
