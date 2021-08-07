const {
    Response
} = require('../common/Response');

module.exports = (service) => (req, res, next) => {
    try {
        const {
            body = {}
        } = req;
        const serviceResponse = service.delete(body)
        res.json(new Response({
            status: true,
            content: serviceResponse
        }));
        next();
    } catch (err) {
        next(err)
    }
}