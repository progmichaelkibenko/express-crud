const {
    Response
} = require('../common/Response');

module.exports = (service) => (req, res, next) => {
    try {
        const {
            query = {},
            params = {}
        } = req;
        const serviceResponse = service.getById(params, query)
        res.json(new Response({
            status: true,
            content: serviceResponse
        }));
        next();
    } catch (err) {
        next(err)
    }
}