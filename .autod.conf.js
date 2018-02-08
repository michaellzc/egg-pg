'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  registry: "https://registry.npmjs.org",
  test: [
    'test',
    'benchmark',
  ],
  dep: [
    'pg',
  ],
  devdep: [
    'egg',
    'egg-ci',
    'egg-bin',
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg',
    'webstorm-disable-index',
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage',
  ],
};
