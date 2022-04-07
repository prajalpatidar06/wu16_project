# API DOCUMENTATION

### Register

- method - POST
- URL- https://wu16-project.herokuapp.com/users/signup
- body :

---

```
{
    "Email": "example@email.com",
    "Password":"examplePassword"
}
```

---

### Login

- method - POST
- URL- https://wu16-project.herokuapp.com/users/signin
- body :

```
{
    "Email": "example@email.com",
    "Password":"examplePassword"
}
```

---

### Convert Long-Url to Short-Url

- method - POST
- URL- https://wu16-project.herokuapp.com/api
- body :

```
{
    "LongUrl": "example.com"
}
```

- headers - Bearer token required

---

### redirect Short-Url to Long-Url

- method - GET
- URL- https://wu16-project.herokuapp.com/api/:shortUrlId

---
