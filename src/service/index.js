const add = require('./add');
const update = require('./update');
const deleteService = require('./delete');
const get = require('./get');
const getById = require('./getById');

module.exports = {
    add,
    update,
    delete: deleteService,
    get,
    getById
}