const Koa = require('koa');
const _ = require('koa-route');
const json = require('koa-json');

const logger = require('./logger');

module.exports = (config) => {
  const app = new Koa();
  const { port } = config.http;

  app.use(json());

  app.use(_.get('/', (ctx) => {
    ctx.body = { msg: 'Books service root endpoint' };
  }));

  app.listen(port, () => logger.info(`Books service listening on port ${port}`));
};
