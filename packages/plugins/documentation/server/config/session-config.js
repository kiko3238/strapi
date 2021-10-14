'use strict';

module.exports = {
  session: {
    client: 'cookie',
    key: 'strapi.sid',
    prefix: 'strapi:sess:',
    ttl: 864000000,
    rolling: false,
    secretKeys: ['mySecretKey1', 'mySecretKey2'],
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 864000000,
      rewrite: true,
      signed: false,
    },
  },
};
