const {
    Response
} = require('../common/Response');

module.exports = (service) => async (req, res, next) => {
    try {
        const {
            body = {},
                query = {},
                params = {}
        } = req;
        const serviceResponse = await service.add({
            data: body,
            query,
            params
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
