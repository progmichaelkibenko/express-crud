module.exports = ({
    repository,
}) => {
    return ({
        data
    }) => repository.update({
        data
    })
}