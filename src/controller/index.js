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
        disableLogs,
    }) => {
        const entityRouter = express.Router();

        const controller = generateControllers({
            service
        })

        const path = `${apiPrefix}/${entityName}`;
        entityRouter.use(path, addBasic({
            more,
            controller
        }))

        if (!disableLogs) {
            console.log(`Crud added for ${entityName} with path ${path}`);
        }

        return entityRouter;
    }
}