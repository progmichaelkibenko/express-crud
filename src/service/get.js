module.exports = ({
    repository,
}) => {
    return ({
        data,
    }) => repository.get({
        data,
    })
}