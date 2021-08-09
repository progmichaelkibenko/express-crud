const {
    getCrudControllers
} = require('./controller');

const genericService = require('./service');

module.exports = ({
    entityName,
    moreRoutes,
    service = genericService
}) => {
    return getCrudControllers({
        entityName,
        service,
        more: moreRoutes
    })
}