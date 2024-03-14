const express = require("express");
const router = express.Router();

// Controllers
const appController = require("../controller/appController");

// Order Routes
router.get("/orders",appController.get_orders); // GET ORDERS
router.post("/order/create",appController.create_order); // CREATE ORDER

// Product Routes
router.delete("/product/delete/:id",appController.delete_product); // DELETE PRODUCT
router.put("/product/update/:id",appController.update_product); // UPDATE PRODUCT
router.post("/product/create",appController.post_product); // CREATE PRODUCT
router.get("/products/:id",appController.get_product_detail); // GET PRODUCT
router.get("/products",appController.get_products); // GET PRODUCT

//Category Routes
router.put("/category/update/:id",appController.update_category); // UPDATE CATEGORY
router.delete("/category/delete/:id",appController.delete_category); // DELETE CATEGORY
router.post("/category/create",appController.post_category); // CREATE CATEGORY
router.get("/categories",appController.get_categories); // GET CATEGORY

// Home Page
router.get("/home",appController.get_home); // GET HOME PAGE


module.exports = router;