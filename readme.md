### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед
  кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

### Routes: Auth

- BASEURL = https://petly-bc26.cyclic.app/
- Register = `/api/users/signup`;
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

- Login = `/api/users/login`;
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

- Logout = `/api/users/logout`;
- Перевіряє Token, та якщо він є - видаляє його з бази данних:

### Routes: CurrentUser

- getUserInfo = `get`, `/api/usersinfo/`
- Перевіряє Token, та якщо він є, повертає об'єкт User

### Routes: UserPets

- getAllPets = `get`, `/api/pets/`
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

- createPat = `post`,`/api/pets/`
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

Отримати всі пости: GET - /api/notices

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

Додати пост: POST - /api/notices

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

Отримати пости по категоріям: GET - /api/notices/category/:category

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

Отримати нотіс по ID: GET - /api/notices/:noticeId

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

Додати нотіс до обраних: GET - /api/notices/favorites/:noticeId
Повертає об'єкт:
```python
{
    "code": 200,
    "status": "success",
    "message": "Notice is added to favorites"
}
```

Отримати всі оборані нотіси: GET - /api/notices/favorites
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
Видалити нотіс з обраних: DELETE - /api/notices/favorites/:noticeId
Повертає об'єкт:
```python
{
    "code": 200,
    "status": "success",
    "message": "Notice is deleted from favorites"
}
```

Отримати персональні нотіси: GET - /api/notices/favorites/personal
Повертає об'єкт:
```python
{
    "code": 200,
    "status": "success",
    "data": []
}
```
