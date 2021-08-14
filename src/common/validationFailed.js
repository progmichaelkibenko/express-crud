const {
    Response,
    ResponseError
} = require('./Response');

module.exports = (req, res, next) => errors => {
    const error = new ResponseError({
        status: 400,
        msg: 'Could not make this operation',
        reason: 'Validation Error',
        url: req.originalUrl,
        ip: req.ip,
        validationErrors: errors
    })

    res.status(error.status);
    res.json(new Response({
        status: false,
        error
    }))

    next()
}