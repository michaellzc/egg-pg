'use strict';

const assert = require('assert');
const url = require('url');
const { Pool } = require('pg');

let count = 0;

const createPG = (config, app) => {
  assert((config.host && config.port && config.user && config.database) || config.connectionString,
    `[egg-pg] 'host: ${config.host}', 'port: ${config.port}', 'user: ${config.user}', 'database: ${config.database}' or 'connectionString: ${config.connectionString}' are required on config`);

  const connectionUri = config.connectionString || `${config.user}@${config.host}:${config.port}/${config.database}`;

  app.coreLogger.info(`[egg-pg] connecting ${config.host || url.parse(connectionUri).hostname}`);

  const pool = new Pool(config);

  app.beforeStart(async () => {
    const { rows } = await pool.query('select now() as currentTime;');
    const index = count++;
    app.coreLogger.info(`[egg-pg] instance[${index}] status OK, PostgreSQL currentTime: ${rows[0].currenttime}`);
  });

  return pool;
};

module.exports = app => {
  app.addSingleton('pg', createPG);
};
