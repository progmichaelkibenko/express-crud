const express = require('express');

const app = express();

const PORT = 3333;

const {
    crud
} = require('./index');

app.use(crud({
    entityName: 'test'
}))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);

});