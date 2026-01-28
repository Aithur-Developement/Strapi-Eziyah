import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
     server: {
      allowedHosts: [
        'databases-and-other-strapieziyah-e57d1s-4f7072-76-13-23-4.traefik.me',
        '.traefik.me', // allows all traefik.me subdomains
      ],
      // Or use 'all' for development:
      // allowedHosts: 'all',
    },
  });
};
