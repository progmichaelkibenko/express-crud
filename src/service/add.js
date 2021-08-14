const {
    isFunction
} = require('lodash');

module.exports = ({
    repository,
    hooks
}) => {
    return async ({
        data
    }) => {
        const {
            pre,
            post,
        } = hooks;

        let _data = data;

        if (isFunction(pre)) {
            _data = await pre({
                data: _data
            })
        }

        let result = await repository.add({
            data: _data
        })

        if (isFunction(post)) {
            result = await post({
                data: _data,
                result
            })
        }

        return result
    }
}