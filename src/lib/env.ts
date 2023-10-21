import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NEWT_CDN_API_TOKEN: z.string(),
    NEWT_API_TOKEN: z.string(),
    WEBSITE_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    NEWT_CDN_API_TOKEN: process.env.NEWT_CDN_API_TOKEN,
    NEWT_API_TOKEN: process.env.NEWT_API_TOKEN,
    WEBSITE_URL: process.env.WEBSITE_URL,
  },
});
