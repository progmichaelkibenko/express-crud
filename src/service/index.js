const add = require('./add');
const update = require('./update');
const deleteService = require('./delete');
const get = require('./get');
const getById = require('./getById');

module.exports = ({
    repository
}) => ({
    add: add({
        repository
    }),
    update: update({
        repository
    }),
    delete: deleteService({
        repository
    }),
    get: get({
        repository
    }),
    getById: getById({
        repository
    })
})