# node-mongoose-core

**Table of Contents**

- [node-mongoose-core](#node-mongoose-core)
- [Register](#register)
- [Login](#login)
- [Get All User](#get-all-user)
- [Get Owner By Id](#get-owner-by-id)

# Register

**Method & URL**

```bash
POST http://localhost:3000/users/registration
```

**Headers**

```bash
Content-Type : application/json
```

**Body**

```json
{
  "username": "",
  "email": "",
  "password": ""
}
```

**Return**

```json
{
  "success": true,
  "payload": {
    "_id": "",
    "username": ""
  }
}
```

[^Top](#node-mongoose-core)

# Login

**Method & URL**

```bash
POST http://localhost:3000/users/login
```

**Headers**

```bash
Content-Type : application/json
```

**Body**

```json
{
  "email": "",
  "password": ""
}
```

**Return**

```json
{
  "success": true,
  "payload": {
    "_id": "",
    "token": ""
  }
}
```

[^Top](#node-mongoose-core)

# Get All User

**Method & URL**

```bash
POST http://localhost:3000/users/get-all
```

**Headers**

```bash
Content-Type : application/json
```

**Params**

```bash
?page=INTEGER&limit=INTEGER
```

**Body**

```json
None
```

**Return**

```json
{
  "status": true,
  "payload": {
    "records": [
      {
        "_id": "",
        "username": "",
        "created": ""
      }
    ],
    "limits": "NUMBER"
  }
}
```

[^Top](#node-mongoose-core)

# Get Owner By Id

**Method & URL**

```bash
POST http://localhost:3000/users/find
```

**Headers**

```bash
Content-Type : application/json
access-token : token
```

**Body**

```json
{
  "_id": ""
}
```

**Return**

```json
{
  "success": true,
  "payload": {
    "_id": "",
    "username": "",
    "email": "",
    "password": "",
    "created": ""
  }
}
```

[^Top](#node-mongoose-core)
