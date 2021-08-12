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
    repository = defaultRepository({
        entityName,
        schema
    }),
    service = defaultServiceGenerator({
        repository
    }),
}) => {
    return getCrudControllers({
        entityName,
        service,
        more: moreRoutes
    })
}