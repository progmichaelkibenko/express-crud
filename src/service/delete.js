module.exports = ({
    repository,
}) => {
    return ({
        data
    }) => repository.delete({
        data
    })
}