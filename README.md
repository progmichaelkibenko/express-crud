# express-pro-crud
A library for building crud with express and with mongo.

```
const mongoose = require('mongoose');
const express = require('express');
const { crud } = require('express-pro-crud');

const {
    Schema
} = mongoose;

const app = express();

const PORT = 3333;

const bestEntitySchema = new Schema({
    name: String,
    updatedAt: Date,
    deletedAt: Date
});

const bestEntityCrud = crud({
    entityName: 'bestEntity',
    mongo: {
        schema: bestEntitySchema
    }
});

app.use(bestEntityCrud)


```




