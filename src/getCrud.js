const {
    getCrudControllers
} = require('./controller');

const defaultServiceGenerator = require('./service');
const defaultRepository = require('./repository');

module.exports = ({
    entityName,
    apiPrefix,
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
    disableLogs
}) => {
    return getCrudControllers({
        entityName,
        apiPrefix,
        service,
        more: moreRoutes,
        disableLogs
    })
}