const {
    getCrudControllers
} = require('./controller');

const defaultServiceGenerator = require('./service');
const defaultRepository = require('./repository');

module.exports = ({
    entityName,
    moreRoutes,
    mongo: {
        schema
    },
    hooks,
    validations,
    repository = defaultRepository({
        entityName,
        schema
    }),
    service = defaultServiceGenerator({
        repository,
        hooks,
        validations
    }),
}) => {
    return getCrudControllers({
        entityName,
        service,
        more: moreRoutes
    })
}