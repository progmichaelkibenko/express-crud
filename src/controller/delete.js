const {
    Response
} = require('../common/Response');

module.exports = (service) => async (req, res, next) => {
    try {
        const {
            body = {}
        } = req;
        const serviceResponse = await service.delete(body)
        res.json(new Response({
            status: true,
            content: serviceResponse
        }));
        next();
    } catch (err) {
        next(err)
    }
}