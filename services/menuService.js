// const menu = require("../data/menuData");

// const categories = ["Starter", "Main Course", "Dessert", "Beverage"];

// const addMenuItem = (req, res) => {
//   const { name, price, category } = req.body;

//   if (!name || typeof price !== "number" || price <= 0 || !categories.includes(category)) {
//     return res.status(400).send({ error: "Invalid menu item data." });
//   }

//   const existingItem = menu.find((item) => item.name === name);
//   if (existingItem) {
//     existingItem.price = price;
//     existingItem.category = category;
//   } else {
//     menu.push({ name, price, category });
//   }

//   res.status(200).send({ message: "Menu item added/updated successfully." });
// };

// const getMenu = (req, res) => {
//   res.status(200).send(menu);
// };

// module.exports = { addMenuItem, getMenu };


// const menu = require("../data/menuData");

// // Add or update a menu item
// function addOrUpdateMenuItem(name, price, category) {
//   // Validate input
//   if (!name || !price || !category) {
//     return { error: "Invalid menu item data. All fields (name, price, category) are required." };
//   }

//   // Check if the price is a positive number
//   if (price <= 0) {
//     return { error: "Invalid price. Price must be a positive number." };
//   }

//   // Check if the category is valid (you could add predefined categories if needed)
//   const validCategories = ["Fast Food", "Italian", "Japanese", "Chinese", "Mexican"]; // Example categories
//   if (!validCategories.includes(category)) {
//     return { error: "Invalid category. Category must be one of the predefined options." };
//   }

//   const existingItem = menu.find((item) => item.name === name);
//   if (existingItem) {
//     // Update existing item
//     existingItem.price = price;
//     existingItem.category = category;
//     return { message: "Menu item updated successfully." };
//   }

//   // Add new menu item
//   menu.push({ name, price, category });
//   return { message: "Menu item added successfully." };
// }

// // Retrieve all menu items
// function getMenuItems() {
//   return menu;
// }

// module.exports = { addOrUpdateMenuItem, getMenuItems };



const menu = require('../data/menuData');

// Add or update a menu item
function addOrUpdateMenuItem(name, price, category) {
  // Validate input
  if (!name || !price || !category) {
    return { error: "Invalid menu item data. All fields (name, price, category) are required." };
  }

  // Check if the price is a positive number
  if (price <= 0) {
    return { error: "Invalid price. Price must be a positive number." };
  }

  // Check if the category is valid (you could add predefined categories if needed)
  const validCategories = ["Fast Food", "Italian", "Japanese", "Chinese", "Mexican"];
  if (!validCategories.includes(category)) {
    return { error: "Invalid category. Category must be one of the predefined options." };
  }

  const existingItem = menu.find(item => item.name === name);
  if (existingItem) {
    // Update existing item
    existingItem.price = price;
    existingItem.category = category;
    return { message: "Menu item updated successfully." };
  }

  // Add new menu item
  menu.push({ name, price, category });
  return { message: "Menu item added successfully." };
}

// Retrieve all menu items
function getMenuItems() {
  return menu;
}

module.exports = { addOrUpdateMenuItem, getMenuItems };
