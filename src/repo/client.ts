import { getServerSideEnv } from "@/config/env";
import { type Content, createClient } from "newt-client-js";

export const cdnClient = createClient({
  apiType: "cdn",
  token: getServerSideEnv().newtCdnApiToken,
  spaceUid: getServerSideEnv().newtSpaceUid,
});

export type { Content };
