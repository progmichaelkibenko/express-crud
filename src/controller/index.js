const express = require('express');
const {
    addBasic
} = require('./router');

const generateControllers = require('./generator');

module.exports = {
    getCrudControllers: ({
        entityName,
        more,
        service,
        apiPrefix = '',
    }) => {
        const entityRouter = express.Router();

        const controller = generateControllers({
            service
        })

        entityRouter.use(`${apiPrefix}/${entityName}`, addBasic({
            more,
            controller
        }))

        return entityRouter;
    }
}