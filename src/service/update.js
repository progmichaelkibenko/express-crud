const {
    Response
} = require('../common/Response');

module.exports = () => {
    return new Response({ status: true, content: 'Yo, the update get ever' })
}