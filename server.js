// const express = require("express");
// const bodyParser = require("body-parser");
// const menuRoutes = require("./routes/menu");
// const orderRoutes = require("./routes/orders");
// const { initializeCronJobs } = require("./utils/cronJobs");

// const app = express();
// app.use(bodyParser.json());

// // Routes
// app.use("/menu", menuRoutes);
// app.use("/orders", orderRoutes);

// // Initialize cron jobs
// initializeCronJobs();

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// const express = require("express");
// const app = express();

// // Import routes
// const menuRoutes = require("./routes/menu");
// const orderRoutes = require("./routes/orders");

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Mount the routes
// app.use("/menu", menuRoutes);
// app.use("/orders", orderRoutes);  // This line ensures that '/orders' route works

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require("express");
const app = express();

// Import routes
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/orders");

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the routes
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
