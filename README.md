# egg-pg

[![dependencies Status](https://david-dm.org/ExiaSR/egg-pg/status.svg?style=flat-square)](https://david-dm.org/ExiaSR/egg-pg)

PostgreSQL plugin which supports pooling for egg.

This plugin exposes the [Pool](https://node-postgres.com/api/pool) object from [node-postgres](https://node-postgres.com) at `app.pg`.

Latest version of [node-postgres](https://node-postgres.com): **7.4.1**

## Install
`npm i @exiasr/egg-pg`

`yarn add @exiasr/egg-pg`

## Configuration
### Enable plugin
```js
// {app_root}/config/plugin.js
exports.pg = {
  enable: true,
  package: '@exiasr/egg-pg',
};
```
### Sample

```js
// {app_root}/config/config.default.js
exports.pg = {
  user: 'root',
  host: 'localhost',
  database: 'compose',
  password: 'supersecure',
  port: '27017',
};
```
### Single database instance
```js
// {app_root}/config/config.default.js
exports.pg = {
  connectionString: 'postgres://<user>:<password>@<host>:<port>/<database>',
}
```
### Multiple database instance
```js
// {app_root}/config/config.default.js
exports.pg = {
  clients: {
    client1: {
      connectionString: 'postgres://root:supersecure@localhost:27017/compose',
    },
    client2: {
      connectionString: 'postgres://root:supersecure@localhost:27018/compose',
    },
  },
};
```
see [config/config.default.js](config/config.default.js) for more detail.

## Usage
### Single database instance
```js
const { app } = this;
const pool = app.pg;
const { rows } = await pool.query('SELECT NOW()');
```

### Multiple database instance
```js
const { app } = this;
const pool = app.pg.get('<client_name>');
const { rows } = await pool.query('SELECT NOW()');
```

## License

[MIT](LICENSE)
