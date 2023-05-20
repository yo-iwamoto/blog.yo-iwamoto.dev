import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    VERCEL_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
});
