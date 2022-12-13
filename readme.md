### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед
  кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

### Routs: Auth

- BASEURL =
- Register = `/api/users/signup`;
- Приймає об'єкт з полями:

```python
  {
  "password": "qwerty123", [required, type: "String"]
  "email": "buival@gmail.com", [required, type: "String"]
  "city": "Kiev, Shevchenko 38", [not required, type: "String", exemple: "sity, street"]
  "birthday": "1995, 11, 17", [not required, type: "String", exemple: "1995, 11, 17" ]
  }
```

- Повертає об'єкт:

```python
  {
  "email": "blanka@gmail.com",
  "city": "Kiev, Shevchenko 38",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJfaWQiOiI2Mzk4OWFmNzI0MDVkY2RiZjI2N2IyOTMiLCJpYXQiOjE2NzA5NDU1MjcsImV4cCI6MTY3MzUzNzUyN30. Z3ZHNvpLZlXSiIjepcgcbEnHk1P6J-QRE9iPBBpY2Mk",
  "avatarURL": "//www.gravatar.com/avatar/aa80d6369342022148fd2261331f6c52",
  "birthday": "1995-11-16T23:00:00.000Z",
  "\_id": "63989af72405dcdbf267b293",
  "createdAt": "2022-12-13T15:32:07.381Z",
  "updatedAt": "2022-12-13T15:32:07.381Z",
  "\_\_v": 0
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
