'use strict';

const path = require('path');
const findUp = require('find-up');

module.exports = {
    method  : 'GET',
    // TODO: Implement route validation for the Site ID.
    // TODO: FIgure out how to do directory listings for branches.
    // See: https://github.com/hapijs/inert/issues/74
    path    : '/l/s;id={siteId}/js/sitecues.js',
    handler : {
        file : {
            path : () => {
                return findUp.sync(path.join('sitecues-core', 'latest-build', 'js', 'sitecues.js'));
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
