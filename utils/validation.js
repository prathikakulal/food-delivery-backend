// const categories = ["Starter", "Main Course", "Dessert", "Beverage"];

// /**
//  * Validate a menu item.
//  * @param {Object} menuItem - The menu item to validate.
//  * @param {string} menuItem.name - The name of the menu item.
//  * @param {number} menuItem.price - The price of the menu item.
//  * @param {string} menuItem.category - The category of the menu item.
//  * @returns {Object} - Returns an object with `isValid` (boolean) and `error` (string) if invalid.
//  */
// const validateMenuItem = (menuItem) => {
//   const { name, price, category } = menuItem;

//   if (!name || typeof name !== "string" || name.trim() === "") {
//     return { isValid: false, error: "Invalid or missing name." };
//   }

//   if (typeof price !== "number" || price <= 0) {
//     return { isValid: false, error: "Price must be a positive number." };
//   }

//   if (!categories.includes(category)) {
//     return { isValid: false, error: `Invalid category. Allowed categories are: ${categories.join(", ")}.` };
//   }

//   return { isValid: true };
// };

// /**
//  * Validate an order.
//  * @param {Array<string>} items - The items in the order.
//  * @param {Array<Object>} menu - The menu to check against.
//  * @returns {Object} - Returns an object with `isValid` (boolean) and `error` (string) if invalid.
//  */
// const validateOrder = (items, menu) => {
//   if (!Array.isArray(items) || items.length === 0) {
//     return { isValid: false, error: "Order must contain at least one item." };
//   }

//   const invalidItems = items.filter((item) => !menu.some((menuItem) => menuItem.name === item));
//   if (invalidItems.length > 0) {
//     return { isValid: false, error: `Invalid items in order: ${invalidItems.join(", ")}.` };
//   }

//   return { isValid: true };
// };

// module.exports = { validateMenuItem, validateOrder };
