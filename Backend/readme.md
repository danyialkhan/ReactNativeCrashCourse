# Backend API Documentation

## Environment Variables

- **PORT**: The port on which the server will run. Default is `3000`.
- **DB_CONNECT**: The MongoDB connection string.
- **JWT_SECRET**: The secret key for JWT token generation.

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
      "msg": "firstName must be at least 3 characters long",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
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
      "msg": "password must be at-least 6 chars long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### GET /users/logout

#### Description
This endpoint is used to log out an existing user.

#### Response
The response will be a JSON object containing the following field:

Example:
```json
{
  "message": "Logged out successfully"
}
```

### GET /users/profile

#### Description
This endpoint is used to get the profile of the authenticated user.

#### Response
The response will be a JSON object containing the following fields:

- `user` (object): An object containing the user's details:
  - `_id` (string): The user's unique identifier.
  - `fullName` (object): An object containing the user's full name:
    - `firstName` (string): The first name of the user.
    - `lastName` (string): The last name of the user.
  - `email` (string): The email address of the user.

Example:
```json
{
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
### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastName` (string, optional): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.

Example:
```json
{
  "fullName": {
    "firstName": "Jane",
    "lastName": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "capacity": 4,
    "vehicleType": "car",
    "plate": "ABC123"
  }
}
```

#### Response
The response will be a JSON object containing the following fields:

- `token` (string): The authentication token for the captain.
- `captain` (object): An object containing the captain's details:
  - `_id` (string): The captain's unique identifier.
  - `fullName` (object): An object containing the captain's full name:
    - `firstName` (string): The first name of the captain.
    - `lastName` (string): The last name of the captain.
  - `email` (string): The email address of the captain.
  - `vehicle` (object): An object containing the vehicle's details:
    - `color` (string): The color of the vehicle.
    - `capacity` (number): The capacity of the vehicle.
    - `vehicleType` (string): The type of the vehicle.
    - `plate` (string): The plate number of the vehicle.

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "capacity": 4,
      "vehicleType": "car",
      "plate": "ABC123"
    }
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
      "msg": "firstName must be at least 3 characters long",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### POST /captains/login

#### Description
This endpoint is used to log in an existing captain.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

#### Response
The response will be a JSON object containing the following fields:

- `token` (string): The authentication token for the captain.
- `captain` (object): An object containing the captain's details:
  - `_id` (string): The captain's unique identifier.
  - `fullName` (object): An object containing the captain's full name:
    - `firstName` (string): The first name of the captain.
    - `lastName` (string): The last name of the captain.
  - `email` (string): The email address of the captain.
  - `vehicle` (object): An object containing the vehicle's details:
    - `color` (string): The color of the vehicle.
    - `capacity` (number): The capacity of the vehicle.
    - `vehicleType` (string): The type of the vehicle.
    - `plate` (string): The plate number of the vehicle.

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "capacity": 4,
      "vehicleType": "car",
      "plate": "ABC123"
    }
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
      "msg": "password must be at-least 6 chars long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```
### GET /captains/profile

#### Description
This endpoint is used to get the profile of the authenticated captain.

#### Response
The response will be a JSON object containing the following fields:

- `captain` (object): An object containing the captain's details:
  - `_id` (string): The captain's unique identifier.
  - `fullName` (object): An object containing the captain's full name:
    - `firstName` (string): The first name of the captain.
    - `lastName` (string): The last name of the captain.
  - `email` (string): The email address of the captain.
  - `vehicle` (object): An object containing the vehicle's details:
    - `color` (string): The color of the vehicle.
    - `capacity` (number): The capacity of the vehicle.
    - `vehicleType` (string): The type of the vehicle.
    - `plate` (string): The plate number of the vehicle.

Example:
```json
{
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "capacity": 4,
      "vehicleType": "car",
      "plate": "ABC123"
    }
  }
}
```
### GET /captains/logout

#### Description
This endpoint is used to log out the authenticated captain.

#### Response
The response will be a JSON object containing the following fields:

- `message` (string): A message indicating that the captain has been logged out successfully.

Example:
```json
{
  "message": "Logged out successfully"
}
```