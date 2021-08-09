const express = require('express');
const {
    addBasic
} = require('./router');

const generateControllers = require('./generator');

module.exports = {
    getCrudControllers: ({
        entityName,
        more,
        service
    }) => {
        const entityRouter = express.Router();

        const controller = generateControllers({
            service
        })

        entityRouter.use(`/${entityName}`, addBasic({
            more,
            controller
        }))

        return entityRouter;
    }
}