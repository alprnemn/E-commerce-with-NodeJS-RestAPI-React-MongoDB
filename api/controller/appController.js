const Category = require("../models/Category");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

// GET ORDERS
exports.get_orders = async(request,response) => {

  try {
    const orders = await Order.find().populate("user","firstname lastname email -_id").populate("products","name price image -_id")

    response.send(orders)

  } catch (error) {
    return response.status(400).send(error)
  }

}

// CREATE ORDER
exports.create_order = async (request, response) => {
  try {

    const userId = request.body.userid;
    const productIds = request.body.productids;

    const user = await User.findOne({ _id: userId });
    
    if (!user) {
      return response.status(400).send("Invalid User");
    }

    const products = [];
    let totalPrice = 0;
    for (const productId of productIds) {
      const product = await Product.findOne({ _id: productId });
      if (!product) {
        return response.status(400).send("Invalid Product");
      }
      products.push(product);
      totalPrice += product.price;
    } 

    const order = new Order({
      user: user.id,
      products: products, 
      price : totalPrice,
      adress: request.body.adress,
      phone: request.body.phone,
    });

    const newOrder = await order.save();

    response.send(newOrder);

  } catch (error) {
    response.status(500).send(error);
  }
};

// DELETE PRODUCT
exports.delete_product = async (request, response) => {
  const productId = request.params.id;

  try {
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return response.status(400).send("Product not found");
    }

    response.send(product);
  } catch (error) {
    response.status(500).send(error);
  }
};

// UPDATE PRODUCT
exports.update_product = async (request, response) => {
  const productId = request.params.id;

  try {
    const product = await Product.findOne({
      _id: productId,
    });

    if (!product) {
      return response.status(400).send("Product not found");
    }

    product.name = request.body.name;
    product.description = request.body.description;
    product.price = request.body.price;
    product.category = request.body.categoryid;
    product.image = request.body.image;
    product.bestseller = request.body.bestseller;

    const updatedProduct = await product.save();

    response.send(updatedProduct);
  } catch (error) {
    response.status(500).send(error);
  }
};

// CREATE PRODUCT
exports.post_product = async (request, response) => {
  try {
    const newProduct = new Product({
      name: request.body.productname,
      description: request.body.productdescription,
      price: request.body.productprice,
      category: request.body.productcategory,
      image: request.body.productimage,
      bestseller: request.body.isbestseller,
    });

    await newProduct.save();

    response.send(newProduct);
  } catch (error) {
    response.status(500).send(error);
  }
};

// GET PRODUCT 
exports.get_product_detail = async (request,response) => {

  const productId = request.params.id;

  try {

    const product = await Product.findOne({
      _id : productId
    });

    if(!product){
      return response.status(400).send("Product not found")
    }

    response.send(product)

  } catch (error) {
    response.status(400).send(error)
  }

}

// GET PRODUCTS
exports.get_products = async (request, response) => {
  try {
    const products = await Product.find().populate("category","name -_id");
    response.send(products);
  } catch (error) {
    response.status(400).send(error);
  }
};

// UPDATE CATEGORY
exports.update_category = async (request, response) => {

  const categoryId = request.params.id;

  try {
    const category = await Category.findOne({
      _id: categoryId,
    });

    if (!category) {
      return response.status(404).send("Category not found");
    }

    category.name = request.body.categoryname;

    const updatedCategory = await category.save();

    response.send(updatedCategory);
  } catch (error) {
    response.status(500).send(error);
  }
};

// DELETE CATEGORY
exports.delete_category = async (request, response) => {
  const categoryId = request.params.id;

  try {
    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      return response.status(404).send("Category does not exist");
    }

    response.send("Deleted category: ", category);
  } catch (error) {
    response.status(500).send(error);
  }
};

// CREATE CATEGORY
exports.post_category = async (request, response) => {
  try {
    const newCategory = new Category({
      name: request.body.categoryname,
    });

    await newCategory.save();

    response.send(newCategory);
  } catch (error) {
    response.status(400).send("Error create category");
  }
};

// GET CATEGORIES
exports.get_categories = async (request, response) => {
  try {
    const categories = await Category.find();
    response.send(categories);
  } catch (error) {
    response.status(400).send(error);
  }
};

// GET HOME
exports.get_home = async (request, response) => {
  
  try {
    const products = await Product.find({
      bestseller : true
    }).select("name price image")
    response.send(products);
  } catch (error) {
    response.status(400).send(error)
  }

};
