const add = require('./add');
const update = require('./update');
const deleteService = require('./delete');
const get = require('./get');
const getById = require('./getById');

module.exports = ({
    repository,
    hooks = {},
    validations = {}
}) => ({
    add: add({
        repository,
        hooks: hooks.add || {},
        validate: validations.add
    }),
    update: update({
        repository,
        hooks: hooks.update || {},
        validate: validations.update
    }),
    delete: deleteService({
        repository,
        hooks: hooks.delete || {},
        validate: validations.delete
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