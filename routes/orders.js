// const express = require("express");
// const { placeOrder, getOrderById } = require("../services/orderService");

// const router = express.Router();

// // Place an order
// router.post("/", placeOrder);

// // Get order details
// router.get("/:id", getOrderById);

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { createOrder, getAllOrders } = require("../services/orderService");

// // POST /orders - Place a new order
// router.post("/", (req, res) => {
//   const { items } = req.body;

//   // Create a new order
//   const result = createOrder(items);

//   if (result.error) {
//     return res.status(400).send(result);
//   }

//   res.status(201).send(result);
// });

// // GET /orders - Retrieve all orders
// router.get("/", (req, res) => {
//   const ordersList = getAllOrders();
//   if (ordersList.length === 0) {
//     return res.status(200).send({ message: "No orders found.", orders: [] });
//   }
//   res.status(200).send({ orders: ordersList });
// });

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// //const { placeOrder, getOrderById } = require('../services/ordersService');
// const { createOrder, getAllOrders } = require("../services/orderService");


// // POST /orders - Place a new order
// router.post('/', (req, res) => {
//   const { items } = req.body;
  
//   if (!items || items.length === 0) {
//     return res.status(400).json({ error: 'Items must be provided for the order.' });
//   }

//   const newOrder = placeOrder(items);
//   res.status(201).json({
//     message: 'Order placed successfully.',
//     orderId: newOrder.id,
//   });
// });

// // GET /orders/:id - Retrieve an order and its status
// router.get('/:id', (req, res) => {
//   const orderId = parseInt(req.params.id, 10);
//   const order = getOrderById(orderId);

//   if (!order) {
//     return res.status(404).json({ error: 'Order not found.' });
//   }

//   res.status(200).json({
//     id: order.id,
//     items: order.items,
//     status: order.status, // Return the current status of the order
//   });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { placeOrder, getOrderById } = require('../services/orderService'); // Ensure these are correctly implemented in ordersService.js

// POST /orders - Place a new order
router.post('/', async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Items must be provided for the order.' });
    }

    const newOrder = await placeOrder(items); // Assuming `placeOrder` is an asynchronous function
    res.status(201).json({
      message: 'Order placed successfully.',
      orderId: newOrder.id,
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Failed to place the order. Please try again.' });
  }
});

// GET /orders/:id - Retrieve an order and its status
router.get('/:id', async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);

    if (isNaN(orderId)) {
      return res.status(400).json({ error: 'Invalid order ID.' });
    }

    const order = await getOrderById(orderId); // Assuming `getOrderById` is an asynchronous function

    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    res.status(200).json({
      id: order.id,
      items: order.items,
      status: order.status, // Return the current status of the order
    });
  } catch (error) {
    console.error('Error retrieving order:', error);
    res.status(500).json({ error: 'Failed to retrieve the order. Please try again.' });
  }
});

module.exports = router;
