const add = require('./add');
const update = require('./update');
const deleteService = require('./delete');
const get = require('./get');
const getById = require('./getById');

module.exports = ({
    repository,
    hooks = {}
}) => ({
    add: add({
        repository,
        hooks: hooks.add || {}
    }),
    update: update({
        repository,
        hooks: hooks.update || {}
    }),
    delete: deleteService({
        repository,
        hooks: hooks.delete || {}
    }),
    get: get({
        repository,
        hooks: hooks.get || {}
    }),
    getById: getById({
        repository,
        hooks: hooks.getById || {}
    })
})