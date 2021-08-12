const mongoose = require('mongoose');
const add = require('./add');
const update = require('./update');
const deleteRepository = require('./delete');
const get = require('./get');
const getById = require('./getById');

module.exports = ({
    entityName,
    schema
}) => {
    const Model = mongoose.model(entityName, schema);
    return {
        add: add({
            Model
        }),
        update: update({
            Model
        }),
        delete: deleteRepository({
            Model
        }),
        get: get({
            Model
        }),
        getById: getById({
            Model
        })
    }
}