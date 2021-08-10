const {
    getCrudControllers
} = require('./controller');

const defaultServiceGenerator = require('./service');
const defaultRepository = require('./repository');

module.exports = ({
    entityName,
    moreRoutes,
    repository = defaultRepository,
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