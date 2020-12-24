/** @type {import("snowpack").SnowpackUserConfig } */
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
          configFile: 'config/babel.config.json',
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
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
