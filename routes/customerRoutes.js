const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

//Middleware to read JSON body from requests
app.use(cors());
app.use(express.json());

let customers = [
    { id: 1, name: "devendra", email: "devendra@gmail.com"},
    { id: 2, name: "neha", email: "neha@gmail.com"},
];

app.get("/", (req, res) => {
    res.send("Home Page from Express");
});

app.get("/about", (req, res) => {
    res.send("About Page from Express");
});

//get all customers
app.get("/customers", (req, res) => {
    res.json(customers);
});

//POST route
app.post("/customers", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  const newCustomer = {
    id: customers.length + 1,
    name: name,
    email: email,
  };

  customers.push(newCustomer);

  res.status(201).json({
    message: "Customer added successfully",
    customer: newCustomer,
  });
});

//DELETE route 
app.delete("/customers/:id", (req, res) => {
    const id = Number(req.params.id);

    const customerExists = customers.some((customer) => customer.id === id);

    if(!customerExists) {
        return res.status(404).json({
            message: "Customer not found",
        });
    }

    customers = customers.filter((customer) => customer.id !== id);

    res.json({
        message: "Customer deleted successfully",
    });
});

//PUT route
app.put("/customers/:id", (req, res) => {
    const id = Number(req.params.id);

    const name = req.body.name;
    const email = req.body.email;

    if(!name || !email) {
        return res.status(400).json({
            message: "Name and email are required",
        });
    }

    const customerIndex = customers.findIndex((customer) => customer.id === id);

    if (customerIndex === -1) {
        return res.status(404).json({
            message: "Customer not found",
        });
    }

    customers[customerIndex] = {
        id: id,
        name: name,
        email: email,
    };

    res.json({
        message: "Customer updated successfully",
        customer: customers[customerIndex],
    });
});

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});