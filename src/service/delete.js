module.exports = ({
    repository,
}) => {
    return ({
        data,
        query
    }) => repository.delete({
        data,
        query
    })
}