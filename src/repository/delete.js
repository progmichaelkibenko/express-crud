module.exports = ({
    Model
}) => {
    return ({
        data,
        query
    }) => {
        const {
            id = query.id
        } = data;

        if (!id) {
            throw new Error(new ResponseError({
                status: 500,
                msg: 'How can i get by id if the id is empty?',
                reason: 'id undefined'
            }))
        }

        delete data.id;
        return Model.findByIdAndUpdate(id, {
            deletedAt: new Date()
        }, {
            new: true
        }).lean()
    }
}