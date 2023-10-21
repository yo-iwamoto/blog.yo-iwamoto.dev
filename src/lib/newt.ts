import { env } from './env';
import { createClient } from 'newt-client-js';

export const newtClient = createClient({
  apiType: 'cdn',
  token: env.NEWT_CDN_API_TOKEN,
  spaceUid: 'yoiw-personal',
});

export const newtAdmin = createClient({
  apiType: 'api',
  token: env.NEWT_API_TOKEN,
  spaceUid: 'yoiw-personal',
});
