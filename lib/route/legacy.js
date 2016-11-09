'use strict';

const path = require('path');
const findUp = require('find-up');
const boom = require('boom');

module.exports = {
    method  : 'GET',
    // TODO: Implement route validation for the Site ID.
    // TODO: FIgure out how to do directory listings for branches.
    // See: https://github.com/hapijs/inert/issues/74
    path    : '/l/s;id={siteId}/js/sitecues.js',
    handler : {
        file : {
            path : () => {
                const fp = findUp.sync(path.join('sitecues-cores', 'latest-build', 'js', 'sitecues.js'));
                if (typeof fp === 'string') {
                    return fp;
                }
                throw boom.notFound();
            },
            confine : false
        }
    },
    config : {
        cors : {
            headers        : ['Accept', 'If-None-Match'],
            exposedHeaders : []
        }
    }
};
