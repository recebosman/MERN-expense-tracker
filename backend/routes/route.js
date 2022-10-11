const routes = require("express").Router();
const controller = require("../controllers/controller");

//categories routes
routes
  .route("/api/categories")
  .post(controller.create_Categories)
  .get(controller.get_categories);

//transactions routes
routes
  .route("/api/transaction")
  .post(controller.create_Transaction)
  .get(controller.get_transaction)
  .delete(controller.delete_transaction);

routes.route("/api/labels").get(controller.get_labels);

// export routes
module.exports = routes;
