// const menu = require("../data/menuData");
// const orders = require("../data/ordersData");

// let orderIdCounter = 1;

// const placeOrder = (req, res) => {
//   const { items } = req.body;

//   if (!Array.isArray(items) || items.length === 0) {
//     return res.status(400).send({ error: "Invalid order data." });
//   }

//   const invalidItems = items.filter((item) => !menu.some((menuItem) => menuItem.name === item));
//   if (invalidItems.length > 0) {
//     return res.status(400).send({ error: `Invalid menu items: ${invalidItems.join(", ")}` });
//   }

//   const newOrder = { id: orderIdCounter++, items, status: "Preparing" };
//   orders.push(newOrder);

//   res.status(201).send({ message: "Order placed successfully.", orderId: newOrder.id });
// };

// const getOrderById = (req, res) => {
//   const orderId = parseInt(req.params.id, 10);
//   const order = orders.find((o) => o.id === orderId);

//   if (!order) {
//     return res.status(404).send({ error: "Order not found." });
//   }

//   res.status(200).send(order);
// };

// module.exports = { placeOrder, getOrderById };


// const orders = require("../data/ordersData");
// const menu = require("../data/menuData");

// let orderIdCounter = 1;

// // Create a new order
// function createOrder(items) {
//   const invalidItems = items.filter((item) => !menu.some((menuItem) => menuItem.name === item));
//   if (invalidItems.length > 0) {
//     return { error: `Invalid items: ${invalidItems.join(", ")}` };
//   }

//   const newOrder = {
//     id: orderIdCounter++,
//     items,
//     status: "Preparing",
//   };

//   orders.push(newOrder);
//   return { message: "Order placed successfully.", orderId: newOrder.id };
// }

// // Retrieve all orders
// function getAllOrders() {
//   return orders;
// }

// module.exports = { createOrder, getAllOrders };



// const orders = require('../data/ordersData');
// const cron = require('node-cron');

// // Function to place an order
// function placeOrder(items) {
//   const orderId = orders.length + 1; // Simple ID generation logic
//   const newOrder = {
//     id: orderId,
//     items: items,
//     status: "Preparing", // Initially, the order is "Preparing"
//   };
//   orders.push(newOrder);

//   return newOrder;
// }

// // Function to get order details by ID
// function getOrderById(orderId) {
//   const order = orders.find(order => order.id === orderId);
//   return order;
// }

// // Function to simulate status updates (e.g., Preparing -> Out for Delivery -> Delivered)
// function updateOrderStatuses() {
//   orders.forEach(order => {
//     if (order.status === "Preparing") {
//       order.status = "Out for Delivery";
//     } else if (order.status === "Out for Delivery") {
//       order.status = "Delivered";
//     }
//   });
// }

// // Schedule the cron job to run every 10 seconds (simulate periodic status updates)
// cron.schedule('*/10 * * * * *', () => {
//   console.log('Updating order statuses...');
//   updateOrderStatuses();
// });

// module.exports = { placeOrder, getOrderById };


// const orders = require('../data/ordersData');
// const cron = require('node-cron');

// // Function to place an order
// function placeOrder(items) {
//   const orderId = orders.length + 1; // Simple ID generation logic
//   const newOrder = {
//     id: orderId,
//     items: items,
//     status: "Preparing", // Initially, the order is "Preparing"
//   };
//   orders.push(newOrder);

//   return newOrder;
// }

// // Function to get order details by ID
// function getOrderById(orderId) {
//   const order = orders.find(order => order.id === orderId);
//   return order;
// }

// // Function to simulate status updates (e.g., Preparing -> Out for Delivery -> Delivered)
// function updateOrderStatuses() {
//   orders.forEach(order => {
//     if (order.status === "Preparing") {
//       order.status = "Out for Delivery";
//     } else if (order.status === "Out for Delivery") {
//       order.status = "Delivered";
//     }
//   });
// }

// // Schedule the cron job to run every 10 seconds (simulate periodic status updates)
// cron.schedule('*/10 * * * * *', () => {
//   console.log('Updating order statuses...');
//   updateOrderStatuses();
// });

// module.exports = { placeOrder, getOrderById };


// services/ordersService.js

// const orders = require('../data/ordersData');
// const cron = require('node-cron');

// // Function to place an order
// function placeOrder(items) {
//   const orderId = orders.length + 1; // Simple ID generation logic
//   const newOrder = {
//     id: orderId,
//     items: items,
//     status: "Preparing", // Initially, the order is "Preparing"
//   };
//   orders.push(newOrder);

//   return newOrder;
// }

// // Function to get order details by ID
// function getOrderById(orderId) {
//   const order = orders.find(order => order.id === orderId);
//   return order;
// }

// // Function to simulate status updates (e.g., Preparing -> Out for Delivery -> Delivered)
// function updateOrderStatuses() {
//   orders.forEach(order => {
//     if (order.status === "Preparing") {
//       order.status = "Out for Delivery";
//     } else if (order.status === "Out for Delivery") {
//       order.status = "Delivered";
//     }
//   });
// }

// // Schedule the cron job to run every 10 seconds (simulate periodic status updates)
// cron.schedule('*/10 * * * * *', () => {
//   console.log('Updating order statuses...');
//   updateOrderStatuses();
// });

// module.exports = { placeOrder, getOrderById };


// services/orderService.js
// let orders = [];  // Store orders in memory

// const createOrder = (items) => {
//   const newOrder = {
//     id: orders.length + 1,  // Generate order ID
//     items,
//     status: "Preparing",  // Default order status
//     date: new Date().toISOString(),  // Order placed time
//   };
//   orders.push(newOrder);
//   return newOrder;
// };

// const getAllOrders = () => {
//   return orders;
// };

// module.exports = { createOrder, getAllOrders };



let orders = []; // Store orders in memory

// Function to place a new order
const placeOrder = (items) => {
  const newOrder = {
    id: orders.length + 1, // Generate order ID
    items,
    status: "Preparing", // Default order status
    date: new Date().toISOString(), // Order placed time
  };
  orders.push(newOrder);
  return newOrder;
};

// Function to get an order by ID
const getOrderById = (id) => {
  return orders.find((order) => order.id === id);
};

// Function to retrieve all orders (if needed)
const getAllOrders = () => {
  return orders;
};

module.exports = { placeOrder, getOrderById, getAllOrders };
