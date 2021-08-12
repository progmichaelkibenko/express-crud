module.exports = ({
    repository,
}) => {
    return ({
        data,
        query
    }) => repository.getById({
        data
    })
}