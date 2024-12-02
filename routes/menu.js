// const express = require("express");
// const { addMenuItem, getMenu } = require("../services/menuService");

// const router = express.Router();

// // Add or update menu items
// router.post("/", addMenuItem);

// // Retrieve menu items
// router.get("/", getMenu);

// module.exports = router;



const express = require('express');
const router = express.Router();
const { addOrUpdateMenuItem, getMenuItems } = require('../services/menuService'); // Ensure this import is correct

// POST /menu - Add or update a menu item
router.post('/', (req, res) => {
  const { name, price, category } = req.body;

  const result = addOrUpdateMenuItem(name, price, category);

  if (result.error) {
    return res.status(400).json(result);  // Send error response with status code 400
  }

  return res.status(201).json(result);  // Success response
});

// GET /menu - Retrieve all menu items
router.get('/', (req, res) => {
  const menuItems = getMenuItems();
  res.status(200).json({ menu: menuItems });
});

module.exports = router;
