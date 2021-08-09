const express = require('express');

module.exports = {
    addBasic: ({
        more,
        controller
    }) => {
        const router = express.Router();
        router.route('/').get(controller.get).post(controller.add).put(controller.update).delete(controller.delete);
        router.route('/:id').get(controller.getById)
        if (more) {
            Object.entries(more).forEach((
                [path, opts]
            ) => {
                const {
                    requestMethod,
                    controller
                } = opts;
                router.route(path)[requestMethod](controller)
            })
        }

        return router;
    }
}