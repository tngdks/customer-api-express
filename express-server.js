const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Customer = mongoose.model("Customer", customerSchema);

app.get("/", (req, res) => {
  res.send("Home Page from Express + MongoDB");
});

// GET all customers
app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching customers",
      error: error.message,
    });
  }
});

// POST new customer
app.post("/customers", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    const newCustomer = new Customer({
      name: name,
      email: email,
    });

    const savedCustomer = await newCustomer.save();

    res.status(201).json({
      message: "Customer added successfully",
      customer: savedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding customer",
      error: error.message,
    });
  }
});

// PUT update customer
app.put("/customers/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { name: name, email: email },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.json({
      message: "Customer updated successfully",
      customer: updatedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating customer",
      error: error.message,
    });
  }
});

// DELETE customer
app.delete("/customers/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const deletedCustomer = await Customer.findByIdAndDelete(id);

    if (!deletedCustomer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.json({
      message: "Customer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting customer",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});