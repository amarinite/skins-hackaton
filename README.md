This API allows you to check, buy, modify and delete skins for a fictional videogame.

This project was created for Jump2Digital's 2023 hackaton. Build with NodeJS, MongoDB and Mongoose.

## Skins

List of all skins available for purchase. Endpoint: `/api/skins/available`.

Request:

```
[GET] http://localhost:1234/api/skins/available
```

Response:

```
{
  [
    {
        "_id": "6546c74d1531bbaef32de269",
        "name": "Goth Vampire Elf",
        "type": "Elf",
        "price": 1.99,
        "color": "dark red",
        "__v": 0
    },
    // ...
  ]
}
```

You can access information about one specific skin with the endpoint `/api/skins/:id`

Request:

```
[GET] http://localhost:1234/api/skins/6546c74d1531bbaef32de269
```

Response:

```
{
    "_id": "6546c74d1531bbaef32de269",
    "name": "Goth Vampire Elf",
    "type": "Elf",
    "price": 1.99,
    "color": "dark red",
    "__v": 0
}
```

## Purchased Skins

List of purchased skins. Endpoint: `/api/skins/myskins`.

Request:

```
[GET] http://localhost:1234/api/skins/myskins
```

Response:

```
{
  [
    {
        "_id": "6546c74d1531bbaef32de269",
        "name": "Goth Vampire Elf",
        "type": "Elf",
        "price": 1.99,
        "color": "dark red",
        "__v": 0
    },
    // ...
  ]
}
```

You can purchase a skin if that skin's ID exists in the Skins database. Endpoint: `/api/skins/buy`

Petición:

```
[POST] http://localhost:1234/api/skins/buy
# Body
{
    "_id": "6546c74d1531bbaef32de269",
    "name": "Goth Vampire Elf",
    "type": "Elf",
    "price": 1.99,
    "color": "dark red",
}
```

Response:

```
{
    "_id": "6546c74d1531bbaef32de269",
    "name": "Goth Vampire Elf",
    "type": "Elf",
    "price": 1.99,
    "color": "dark red",
    "__v": 0
}
```

## Modify Purchased Skins

You can modify a purchased skin's color from a limited array of options. Endpoint: `/api/skins/color/:id`

Available colors: `["dark red", "pale red", "red", "blue", "dark blue", "orange", "pale orange", "yellow", "pale green", "green", "grey", "white", "black", "pink", "pale pink", "dark pink", "purple", "dark purple"]`

```
[PUT] http://localhost:1234/api/skins/color/6546c74d1531bbaef32de269
# Body
{
    "color": "orange"
}
```

Respuesta

```
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

To delete a purchased skin, use the endpoint: `/skins/delete/:id`

```
[DELETE] http://localhost:1234/api/skins/delete/6546c74d1531bbaef32de269
```

Response

```
{
  "acknowledged": true,
  "deletedCount": 1
}
```
