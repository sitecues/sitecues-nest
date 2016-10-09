'use strict';

const fs = require('fs');
const path = require('path');
const isRoot = require('is-root');
const { Server } = require('hapi');
const inert = require('inert');
/* eslint-disable global-require */
const routes = [
    require('./route/build')
];
/* eslint-enable global-require */

class Nest extends Server {
    constructor(option) {
        const privileged = isRoot();
        const config = Object.assign(
            {
                insecurePort : privileged ? 80 : 3000,
                port         : privileged ? 443 : 3000,
                tls          : {
                    // Async configuration for constructors is a pain.
                    /* eslint-disable no-sync */
                    key  : fs.readFileSync(path.join(__dirname, 'ssl/key/localhost.key')),
                    cert : fs.readFileSync(path.join(__dirname, 'ssl/cert/localhost-chain.cert'))
                    /* eslint-enable no-sync */
                }
            },
            option
        );

        super();

        super.connection({
            port : config.port,
            tls  : config.tls
        });
        super.connection({
            port : config.insecurePort
        });
    }

    start() {
        return super.register(inert).then(() => {
            super.route(routes);

            // Sadly, we cannot just return the start() promise because of:
            // https://github.com/hapijs/hapi/issues/3217

            return new Promise((resolve, reject) => {
                super.start((err) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve();
                });
            });
        });
    }
}

module.exports = Nest;
