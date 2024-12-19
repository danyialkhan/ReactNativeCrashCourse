# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastName` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response
The response will be a JSON object containing the following fields:

- `token` (string): The authentication token for the user.
- `user` (object): An object containing the user's details:
  - `_id` (string): The user's unique identifier.
  - `fullName` (object): An object containing the user's full name:
    - `firstName` (string): The first name of the user.
    - `lastName` (string): The last name of the user.
  - `email` (string): The email address of the user.

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Response
The error response will be a JSON object containing the following fields:

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "first name must be 3 characters long.",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "password must be at-least 6 chars long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Environment Variables

- **PORT**: The port on which the server will run. Default is `3000`.
- **DB_CONNECT**: The MongoDB connection string.
- **JWT_SECRET**: The secret key for JWT token generation.
