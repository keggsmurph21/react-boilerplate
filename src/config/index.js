import paths from './paths';

if (!process.env.APP_SECRET)
  throw new Error('missing required environment variable APP_SECRET');

export const APP_SECRET = process.env.APP_SECRET;
export const PORT = process.env.PORT || 6900;

export { paths } from './paths';
