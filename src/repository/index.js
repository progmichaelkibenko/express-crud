const add = require('./add');
const update = require('./update');
const deleteRepository = require('./delete');
const get = require('./get');
const getById = require('./getById');

module.exports = {
    add,
    update,
    delete: deleteRepository,
    get,
    getById
}