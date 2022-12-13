### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед
  кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

### Routs: Auth

- BASEURL = https://petly-bc26.cyclic.app/
- Register = `/api/users/signup`;
- Приймає об'єкт з полями:

```python
  {
  "password": "qwerty123", [required, type: "String"]
  "email": "buival@gmail.com", [required, type: "String"]
  "city": "Kiev, Shevchenko 38", [not required, type: "String", exemple: "sity, street"]
  "phone": "25665225585",
  "city": "Kiev, Shevchenko 38",
  "name": "Andrii"
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
