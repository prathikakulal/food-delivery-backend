const cron = require("node-cron");
const orders = require("../data/ordersData");

const initializeCronJobs = () => {
  cron.schedule("*/1 * * * *", () => {
    orders.forEach((order) => {
      if (order.status === "Preparing") {
        order.status = "Out for Delivery";
      } else if (order.status === "Out for Delivery") {
        order.status = "Delivered";
      }
    });
    console.log("Order statuses updated.");
  });
};

module.exports = { initializeCronJobs };
