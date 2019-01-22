import { resolve } from 'path';

export const paths = {
  PUBLIC: resolve(__dirname, 'public'),
  VIEWS: resolve(__dirname, 'src', 'server', 'views'),
};

console.log(paths);
