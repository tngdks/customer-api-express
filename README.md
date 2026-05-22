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

1. Home Route
GET /

2. Get All Customers
GET /customers

3. Add Customer
POST /customers

4. Update Customer
PUT /customers/:id

5. Delete Customer
DELETE /customers/:id

How to Run Locally:
1.Clone the repository
   git clone https://github.com/tngdks/customer-api-express.git
2.pen the project folder
   cd customer-api-express
3.Install dependencies
   npm install
4.Start the server
   node express-server.js
5.Open in browser
   http://localhost:3000/customers

   
###Important Note

Currently, customer data is stored in an in-memory array.
This means data will reset when the server restarts.

MongoDB integration will be added in the next version.

What I Learned =>
1.Creating an Express server
2.Building REST API routes
3.Handling GET, POST, PUT, and DELETE requests
4.Using req.body for request data
5.Using req.params for dynamic route IDs
6.Sending JSON responses
7.Testing APIs with Postman
8.Connecting React frontend with Express backend


Author,
Devendra Kumar Sharma

GitHub: https://github.com/tngdks
