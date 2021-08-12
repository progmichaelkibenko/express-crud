module.exports = ({
    Model
}) => {
    return ({
        data
    }) => {
        const mongoObject = new Model(data);
        return mongoObject.save();
    }
}