const {
    isFunction,
    isEmpty
} = require('lodash');

module.exports = ({
    repository,
    hooks,
    validate
}) => {
    return async ({
        data,
        query,
        validationFailed
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

        if (isFunction(validate)) {
            const errors = await validate({
                data: _data
            });
            if (!isEmpty(errors)) {
                validationFailed(errors);
            }
        }

        let result = await repository.delete({
            data: _data,
            query
        })

        if (isFunction(post)) {
            result = await post({
                data: _data,
                result
            })
        }

        return result;
    }
}