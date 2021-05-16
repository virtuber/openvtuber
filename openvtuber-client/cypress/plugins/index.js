const { startDevServer } = require('@cypress/vite-dev-server');
const path = require('path');

module.exports = (on, config) => {
  const viteConfig = {};
  (viteConfig.configFile = path.resolve(
    __dirname,
    '..',
    '..',
    'config',
    'vite.config.ts',
  )),
    on('dev-server:start', async (options) =>
      startDevServer({
        options,
        viteConfig,
      }),
    );

  return config;
};
