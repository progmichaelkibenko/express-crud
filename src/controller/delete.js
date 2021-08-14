const {
    Response,
    validationFailed
} = require('../common');

module.exports = (service) => async (req, res, next) => {
    try {
        const {
            body = {},
                query = {},
        } = req;
        const serviceResponse = await service.delete({
            data: body,
            query,
            validationFailed: validationFailed(req, res, next)
        });
        res.json(new Response({
            status: true,
            content: serviceResponse
        }));
        next();
    } catch (err) {
        next(err)
    }
}