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
    repository = defaultRepository({
        entityName,
        schema
    }),
    service = defaultServiceGenerator({
        repository,
        hooks
    }),
}) => {
    return getCrudControllers({
        entityName,
        service,
        more: moreRoutes
    })
}