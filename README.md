# Customer API - Express.js Backend

This is a simple Express.js backend API for managing customer data.  
It supports full CRUD operations using REST API routes.

## Features

- Get all customers
- Add a new customer
- Update customer details
- Delete customer by ID
- JSON request and response handling
- Tested using Postman
- Connected with React frontend

## Tech Stack

- Node.js
- Express.js
- JavaScript
- REST API
- Postman
- CORS

## API Endpoints

### 1. Home Route

```http
GET /

2. Get All Customers
GET /customers

Response example:

[
  {
    "id": 1,
    "name": "devendra",
    "email": "devendra@gmail.com"
  }
]
3. Add Customer
POST /customers

Request body:

{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}

Response example:

{
  "message": "Customer added successfully",
  "customer": {
    "id": 3,
    "name": "Rahul",
    "email": "rahul@gmail.com"
  }
}
4. Update Customer
PUT /customers/:id

Example:

PUT /customers/1

Request body:

{
  "name": "Devendra Sharma",
  "email": "devendra@gmail.com"
}

Response example:

{
  "message": "Customer updated successfully",
  "customer": {
    "id": 1,
    "name": "Devendra Sharma",
    "email": "devendra@gmail.com"
  }
}
5. Delete Customer
DELETE /customers/:id

Example:

DELETE /customers/1

Response example:

{
  "message": "Customer deleted successfully"
}
How to Run Locally
Clone the repository
git clone https://github.com/tngdks/customer-api-express.git
Open the project folder
cd customer-api-express
Install dependencies
npm install
Start the server
node express-server.js
Open in browser
http://localhost:3000/customers
Important Note

Currently, customer data is stored in an in-memory array.
This means data will reset when the server restarts.

MongoDB integration will be added in the next version.

What I Learned
Creating an Express server
Building REST API routes
Handling GET, POST, PUT, and DELETE requests
Using req.body for request data
Using req.params for dynamic route IDs
Sending JSON responses
Testing APIs with Postman
Connecting React frontend with Express backend
Author

Devendra Kumar Sharma

GitHub: https://github.com/tngdks
