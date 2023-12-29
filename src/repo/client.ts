import { env } from "@/config/env";
import { createClient, type Content } from "newt-client-js";

export const cdnClient = createClient({
  apiType: "cdn",
  token: env.newtCdnApiToken,
  spaceUid: env.newtSpaceUid,
});

export { Content };
