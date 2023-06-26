// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

Product.belongsTo(Category, {
  forignKey: "category_id",
});

// Categories have many Products

Category.hasMany(Product, {
  forignKey: "product_id",
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  forignKey: "product_tag_id",
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  forignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
