module.exports = ({
    repository,
}) => {
    return ({
        data
    }) => repository.getById({
        data
    })
}