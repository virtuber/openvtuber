/** @type {import("snowpack").SnowpackUserConfig } */
const path = require('path');
module.exports = {
  mount: {
    public: { url: '/', static: false },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-babel',
      {
        transformOptions: {
          root: '../',
          configFile: path.resolve(__dirname, '../config/babel.config.json'),
        },
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    treeshake: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    clean: true,
    out: '../src/openvtuber/client',
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
