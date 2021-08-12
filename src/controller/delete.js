const {
    Response
} = require('../common/Response');

module.exports = (service) => async (req, res, next) => {
    try {
        const {
            body = {},
                query = {},
        } = req;
        const serviceResponse = await service.delete({
            data: body,
            query
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