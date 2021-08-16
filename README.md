# express-pro-crud
A library for building crud with express and mongo.

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

## Contracts

* add antity POST => /{entityNmae}
* update entity PUT => /{entityName}
* delete entity DELETE => 
* getAll entity instances GET => /{entityName}
* get entity by id GET => /{entityName}/{id}

### Response Contracts

```
{
  "status": true,
  "error": null,
  "content": [
    {
      "_id": "611545e14308db2225ab5399",
      "name": "best entity 2",
      "__v": 0
    },
    {
      "_id": "6118114d8005f92d5df8632f",
      "name": "base entity",
      "__v": 0,
      "updatedAt": "2021-08-14T18:58:48.001Z"
    }
  ]
}

```

error response

```
{
  "status": false,
  "error": {
    "status": 400,
    "msg": "Could not make this operation",
    "reason": "Validation Error",
    "url": "/bestEntity?id=611544f3a835c720daad309d",
    "ip": "::ffff:127.0.0.1",
    "validationErrors": [
      {
        "field": "name",
        "msg": "name cant be blank"
      }
    ]
  },
  "content": null
}

```



