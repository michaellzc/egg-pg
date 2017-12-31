# egg-pg
PostgreSQL Plugin for egg.

## Usage

```js
// {app_root}/config/plugin.js
exports.pg = {
  enable: true,
  package: 'egg-pg',
};
```

## Configuration

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

```js
// {app_root}/config/config.default.js
exports.pg = {
  connectionString: 'postgres://<user>:<password>@<host>:<port>/<database>',
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

### Multiple database instance

```js
  config.pg = {
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

## License

[MIT](LICENSE)
