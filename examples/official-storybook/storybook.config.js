// list of globs & external urls
export const entries = ['**/*.stories.[t|j]s'];

export const theme = {};

export const presets = [];
export const addons = [];

export const logLevel = 'info';

export const managerWebpack = async (base, config) => {
  const e = await config.entries;

  const { default: webpackMerge } = await import('webpack-merge');

  const output = webpackMerge(base, {
    plugins: [],

    resolve: {
      mainFields: ['browser', 'module', 'main'],
    },
  });

  console.log('this shows up in the log!');

  return output;
};

export const output = {
  location: './',
  compress: false,
  preview: true, // would enable/disable or set a custom location
};

export const server = {
  port: 1337,
  host: 'localhost',

  devPorts: {
    manager: 55550,
    preview: 55551,
  },
  // static: {
  //   '/': 'assets',
  // },
  // ssl: {
  //   ca: [],
  //   cert: '',
  //   key: '',
  // },
  // middleware: async (app, server) => {},
};
