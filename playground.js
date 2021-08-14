const mongoose = require('mongoose');
const express = require('express');

const {
    Schema
} = mongoose;

const app = express();

const PORT = 3333;

const connect = () => {
    const db_connection_string = `mongodb+srv://michaelKibenko:123789456@cleanarwithnode.6eoou.mongodb.net/basic-shop`
    mongoose.connect(db_connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection to Mongo has failed'))
    db.once('open', () => {
        console.log('Succesfully connected to mongo db cluster');
    })
}

const {
    crud
} = require('./index');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

connect();

const pakaSchema = new Schema({
    name: String,
    updatedAt: Date,
    deletedAt: Date
});

app.use(crud({
    entityName: 'paka',
    mongo: {
        schema: pakaSchema
    },
    validations: {
        delete: async ({
            data
        }) => {
            const {
                name
            } = data;
            const returnable = [];
            if (name === 'paka') {
                returnable.push({
                    field: 'name',
                    msg: 'name cant be paka'
                })
            }
            return returnable;
        }
    }
}))

// app.use(crud({
//     entityName: 'test',
// }))

// app.use(crud({
//     entityName: 'puki'
// }))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});