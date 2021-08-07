const {
    Response
} = require('../common/Response');

module.exports = (service) => (req, res, next) => {
    try {
        const {
            query = {}
        } = req;
        const serviceResponse = service.get(query)
        res.json(new Response({
            status: true,
            content: serviceResponse
        }));
        next();
    } catch (err) {
        next(err)
    }
}