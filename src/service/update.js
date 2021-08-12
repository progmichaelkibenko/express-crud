module.exports = ({
    repository,
}) => {
    return ({
        data,
        query
    }) => repository.update({
        data,
        query
    })
}