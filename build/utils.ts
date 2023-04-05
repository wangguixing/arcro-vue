import { loadEnv } from 'vite';

export const getViteEnvConf = (mode: string) => {
  return loadEnv(mode, process.cwd());
};
