import { env } from "@/config/env";
import { type Content, createClient } from "newt-client-js";

export const cdnClient = createClient({
  apiType: "cdn",
  token: env.newtCdnApiToken,
  spaceUid: env.newtSpaceUid,
});

export type { Content };
