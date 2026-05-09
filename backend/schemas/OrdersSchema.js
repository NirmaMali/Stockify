const { Schema } = require("mongoose");


//This schema defines the structure of the Orders collection in the MongoDB database. It includes fields for the name of the product, quantity, price, and mode of payment.
const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrdersSchema };