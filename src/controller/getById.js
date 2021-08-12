const {
    Response
} = require('../common/Response');

module.exports = (service) => async (req, res, next) => {
    try {
        const {
            query = {},
                params = {}
        } = req;
        const serviceResponse = await service.getById({
            data: params,
            query
        })
        res.json(new Response({
            status: true,
            content: serviceResponse
        }));
        next();
    } catch (err) {
        next(err)
    }
}