module.exports = ({
    Model
}) => {
    return ({
        data
    }) => {
        return Model.find({
            ...data,
            deletedAt: {
                $exists: false
            }
        }).lean()
    }
}