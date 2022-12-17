### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед
  кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

### Routes: Auth

- BASEURL = `https://petly-bc26.cyclic.app/`
- Register = `method POST`, `/api/users/signup`;
- Приймає об'єкт з полями:

```python
  {
    "password": "qwerty123",       [required, type: "String"]
    "email": "buival@gmail.com",   [required, type: "String"]
    "city": "Kiev, Shevchenko 38", [required, type: "String", exemple: "sity, street"]
    "phone": "25665225585",        [required, type: "String"]
    "name": "Andrii"               [required, type: "String"]
  }
```

- Повертає об'єкт:

```python
  {
   "email": "bulivar@gmail.com",
    "name": "Andrii",
    "city": "Kiev, Shevchenko 38",
    "phone": "25665225585",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4YzQ2YWZhOTE0N2NlYThmNGYyNTUiLCJpYXQiOjE2NzA5NTYxMzgsImV4cCI6MTY3MzU0ODEzOH0.Yfmgk_9CQ-0dGwoyKwezEMbiJ1vtEL7c7a119oJxhfg",
    "avatarURL": "//www.gravatar.com/avatar/70e981b9c72ab985cf3eb1e22cb143ae",
    "_id": "6398c46afa9147cea8f4f255",
    "createdAt": "2022-12-13T18:28:58.401Z",
    "updatedAt": "2022-12-13T18:28:58.401Z",
    "__v": 0
  }
```

- Login = `method POST`, `/api/users/login`;
- Приймає об'єкт з полями:

```python
  {
  "password": "qwerty123", [required, type: "String"]
  "email": "buival@gmail.com", [required, type: "String"]
  }
```

- Повертає об'єкт: (аналонічно об'єкту реєстаціі)

```python

```

- Logout = `method POST`, `/api/users/logout`;
- Перевіряє Token, та якщо він є - видаляє його з бази данних:

### Routes: CurrentUser

- getUserInfo = `method GET`, `/api/usersinfo/`
- Перевіряє Token, та якщо він є, повертає об'єкт User

```python
{
    "favorites": [],
    "_id": "6399a977c2931ae12be83fdd",
    "email": "lolobok@gmail.com",
    "name": "Petro Fkhlb",
    "city": "Kiev, Shevchenko 38",
    "phone": "56565858558",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk5YTk3N2MyOTMxYWUxMmJlODNmZGQiLCJpYXQiOjE2NzEwMzE5OTYsImV4cCI6MTY3MzYyMzk5Nn0.FqJWYARTnsXHyzWQR3a81PDgxXpZ2noWQnq6LNUR6YQ",
    "avatarURL": "//www.gravatar.com/avatar/2533446eae7d45c1ff27ddb77516c24c",
    "createdAt": "2022-12-14T10:46:15.875Z",
    "updatedAt": "2022-12-14T15:33:16.939Z",
    "__v": 0,
    "userPets": [
        {
            "_id": "639a174ec17b65142cc17154",
            "name": "barbos",
            "birthday": "Invalid Date",
            "breed": "labrador",
            "photoURL": "https://www.novochag.ru/upload/img_cache/cdb/cdb894b14356d88d490e59b3199e3845_ce_2352x1565x37x0.jpg",
            "photoId": "",
            "comments": "fjghjfkjoihjoifjyihjmfiotymbmybmygbmyfbpoymbkymbtm",
            "owner": "6399a977c2931ae12be83fdd",
            "createdAt": "2022-12-14T18:34:54.619Z",
            "updatedAt": "2022-12-14T18:34:54.619Z"
        },
        {
            "_id": "639a1d9fdb522ff63e751620",
            "name": "barbos",
            "birthday": "Invalid Date",
            "breed": "labrador",
            "photoURL": "https://www.novochag.ru/upload/img_cache/cdb/cdb894b14356d88d490e59b3199e3845_ce_2352x1565x37x0.jpg",
            "photoId": "",
            "comments": "fjghjfkjoihjoifjyihjmfiotymbmybmygbmyfbpoymbkymbtm",
            "category": "My pets",
            "owner": "6399a977c2931ae12be83fdd",
            "createdAt": "2022-12-14T19:01:51.479Z",
            "updatedAt": "2022-12-14T19:01:51.479Z"
        }
    ]
}
```

### Routes: UserUpdate

- updateUserInfo = `method PATCH`, `/api/usersinfo/update`
- Перевіряє Token, та приймає об'єкт з полями

```python
{
    "email": "petkochilo@gmail.com",
    "city": "New Yourk, Shevchenko 38",
    "phone": "+38455698526",
    "name": "petkchilo",
    "birthday": "2015.07.11",
    "avatarURL": "https://avatars.dzeninfra.ru/get-zen_doc/scale_1200"
}
```

- Повертає новий об'єкт: User

### Routes: UserPets

- getAllPets = `method GET`, `/api/pets/`
- Повертає масив об'єктів з тваринами користувача:

```python
"pets": [
            {
                "_id": "639a174ec17b65142cc17154",
                "name": "barbos",
                "birthday": "Invalid Date",
                "breed": "labrador",
                "photoURL": "https://www.novochag.ru/upload/img_cache/cdb/cdb894b14356d88d490e59b3199e3845_ce_2352x1565x37x0.jpg",
                "photoId": "",
                "comments": "fjghjfkjoihjoifjyihjmfiotymbmybmygbmyfbpoymbkymbtm",
                "owner": "6399a977c2931ae12be83fdd",
                "createdAt": "2022-12-14T18:34:54.619Z",
                "updatedAt": "2022-12-14T18:34:54.619Z"
            },
            {
                "_id": "639a1d9fdb522ff63e751620",
                "name": "barbos",
                "birthday": "Invalid Date",
                "breed": "labrador",
                "photoURL": "https://www.novochag.ru/upload/img_cache/cdb/cdb894b14356d88d490e59b3199e3845_ce_2352x1565x37x0.jpg",
                "photoId": "",
                "comments": "fjghjfkjoihjoifjyihjmfiotymbmybmygbmyfbpoymbkymbtm",
                "category": "My pets",
                "owner": "6399a977c2931ae12be83fdd",
                "createdAt": "2022-12-14T19:01:51.479Z",
                "updatedAt": "2022-12-14T19:01:51.479Z"
            },
]

```

- createPat = `method POST`,`/api/pets/`
- Приймає об'єкт з полями:

```python
  {
    "name": "bimba",
    "birthday": "2015.12.07",
    "breed": "labrador",
    "photoURL": "https://www.novochag.ru/upload/img_cache/cdb/cdb894b14356d88d490e59b3199e3845_ce_2352x1565x37x0.jpg",
    "photoId": "njnjhj",
    "comments":"fjghjfkjoihjoifjyihjmfiotymbmybmygbmyfbpoymbkymbtm"
}
```

- Повертає об'єкт з новою твариною:

```python
{
    "name": "bimba",
    "birthday": "Mon Dec 07 2015 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)",
    "breed": "labrador",
    "photoURL": "https://www.novochag.ru/upload/img_cache/cdb/cdb894b14356d88d490e59b3199e3845_ce_2352x1565x37x0.jpg",
    "photoId": "njnjhj",
    "comments": "fjghjfkjoihjoifjyihjmfiotymbmybmygbmyfbpoymbkymbtm",
    "owner": "6399a977c2931ae12be83fdd",
    "_id": "639b03daf61a81ebdc5ee19f",
    "createdAt": "2022-12-15T11:24:10.750Z",
    "updatedAt": "2022-12-15T11:24:10.750Z"
}
```

### Routes: Sponsors and News

- Sponsors = `/api/info/sponsors`;
- Повертає масив об'єктів з партнерами.

- News = `/api/info/news`;
- Повертає масив об'єктів з новинами.

### Routes: Notices

Отримати всі пости: `method GET` - `/api/notices`

Повертає об'єкт:

```python
  {
    "code": 200,
    "status": "success",
    "data": [],
    "totalPages": 1,
    "page": 1
  }
```

Додати пост: `method POST` - `/api/notices`

- Приймає об'єкт з полями:

```python
  {
    "category": "sell",
    "title": "some title 3",
    "name": "some name 3",
    "birthday": "2000-10-11",
    "breed": "some breed 3",
    "sex": "male",
    "location": "Kyiv, Kyivska 3",
    "photoURL": "photo URL 3",
    "photoId": "photo id 3",
    "comments": "comments 3333333",
    "price": 100
  }
```

Повертає об'єкт з полями:
```pyton
{
    "code": 201,
    "status": "success",
    "data": {
        "category": "sell",
        "title": "some title 3",
        "name": "some name 3",
        "birthday": "2000-10-11T00:00:00.000Z",
        "breed": "some breed 3",
        "sex": "male",
        "location": "Kyiv, Kyivska 3",
        "photoURL": "http://res.cloudinary.com/dnkfxtdl2/image/upload/v1671265484/6399e3c3c78610f9017f6e5e_1671265481773.jpg",
        "photoId": "6399e3c3c78610f9017f6e5e_1671265481773",
        "comments": "comments 3333333",
        "price": 100,
        "owner": "6399e3c3c78610f9017f6e5e",
        "_id": "639d7cca384c83a001d40894",
        "createdAt": "2022-12-17T08:24:42.939Z",
        "updatedAt": "2022-12-17T08:24:42.939Z"
    }
}
```

Отримати пости по категоріям: `method GET` - `/api/notices/category/:category`

Категорії: ["sell", "lost-found", "for-free"]
Повертає об'єкт:

```python
{
    "code": 200,
    "status": "success",
    "data": [],
    "totalPages": 0,
    "page": 1
}
```

Отримати нотіс по ID: `method GET` - `/api/notices/:noticeId`

Повертає об'єкт:

```python
{
    "code": 200,
    "status": "success",
    "data": {
        "_id": "6399e0f49b156ec8b9e8d3dd",
        "category": "sell",
        "title": "some title",
        "name": "some name",
        "birthday": "2000-10-11T00:00:00.000Z",
        "breed": "some breed",
        "sex": "male",
        "location": "Kyiv, Kyivska",
        "photoURL": "photo URL",
        "photoId": "photo id",
        "comments": "comments",
        "price": 100,
        "owner": null
    }
}
```

Додати нотіс до обраних: `method GET` - `/api/notices/favorites/:noticeId`
Повертає об'єкт:

```python
{
    "code": 200,
    "status": "success",
    "message": "Notice is added to favorites"
}
```

Отримати всі оборані нотіси: `method GET` - `/api/notices/favorites`
Повертає об'єкт:

```python
{
    "code": 200,
    "status": "success",
    "data": [],
    "totalPages": 1,
    "page": 1
}
```

Видалити нотіс з обраних: `method DELETE` - `/api/notices/favorites/:noticeId`
Повертає об'єкт:

```python
{
    "code": 200,
    "status": "success",
    "message": "Notice is deleted from favorites"
}
```

Отримати персональні нотіси:`method GET` - `/api/notices/favorites/personal`
Повертає об'єкт:

```python
{
    "code": 200,
    "status": "success",
    "data": []
}
```

Видалити персональний нотіс: `method DELETE` - `/api/notices/:noticeId`
Повертає об'єкт:

```python
{
    "code": 200,
    "status": "success",
    "message": "Notice is removed"
}
```
