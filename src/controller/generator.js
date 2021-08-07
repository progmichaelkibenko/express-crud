const add = require('./add');
const update = require('./update');
const get = require('./get');
const getById = require('./getById');
const deleteController = require('./delete');

module.exports = ({
    service
} = {}) => {
    return {
        add: add(service),
        update: update(service),
        get: get(service),
        getById: getById(service),
        delete: deleteController(service)
    }
}