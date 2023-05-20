import { env } from './env';

const scheme = process.env.NODE_ENV === 'production' ? 'https' : 'http';

export const websiteUrl = `${scheme}://${env.VERCEL_URL}`;
