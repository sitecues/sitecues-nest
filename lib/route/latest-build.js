'use strict';

const path = require('path');
const findUp = require('find-up');
const boom = require('boom');

module.exports = {
    method  : 'GET',
    // TODO: Implement route validation for the Site ID.
    // TODO: FIgure out how to do directory listings for branches.
    // See: https://github.com/hapijs/inert/issues/74
    path    : '/{appName}/s;id={siteId}/~latest/latest/{file*}',
    handler : {
        directory : {
            path : (request) => {
                const { appName } = request.params;
                const fp = findUp.sync(path.join(appName, 'latest-build'));
                if (typeof fp === 'string') {
                    return fp;
                }
                throw boom.notFound();
            },
            redirectToSlash : true,
            listing         : true
        }
    },
    config : {
        cors : {
            headers        : ['Accept', 'If-None-Match'],
            exposedHeaders : []
        }
    }
};
