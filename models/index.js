// Import the Sequelize models for Product, Category, Tag, and ProductTag
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships between models

// Each Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Establish foreign key relationship
  onDelete: 'CASCADE', // Cascade deletion if the associated Category is deleted
});

// Each Category can have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Establish foreign key relationship
  onDelete: 'CASCADE', // Cascade deletion if the associated Products are deleted
});

// Many-to-Many relationship: Products belong to many Tags through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag, // Define the intermediate model
  as: 'productTag_products', // Alias for the relationship
  foreignKey: 'product_id' // Foreign key for the relationship
});

// Many-to-Many relationship: Tags belong to many Products through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag, // Define the intermediate model
  as: 'productTag_products', // Alias for the relationship
  foreignKey: 'tag_id' // Foreign key for the relationship
});

// Export the models for use in other files
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
