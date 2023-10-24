import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    WEBSITE_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    WEBSITE_URL: process.env.WEBSITE_URL,
  },
});
