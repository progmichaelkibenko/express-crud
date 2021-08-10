module.exports = ({
    repository,
}) => {
    return ({
        data
    }) => repository.add({
        data
    })
}