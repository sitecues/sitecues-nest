'use strict';

const path = require('path');
const findUp = require('find-up');

module.exports = {
    method  : 'GET',
    // TODO: Implement route validation for the Site ID.
    // TODO: FIgure out how to do directory listings for branches.
    // See: https://github.com/hapijs/inert/issues/74
    path    : '/{appName}/s;id={siteId}/{file*}',
    handler : {
        directory : {
            path : (request) => {
                const { appName } = request.params;
                return findUp.sync(path.join(appName, 'build'));
            },
            redirectToSlash : true,
            listing         : true
        }
    }
};
