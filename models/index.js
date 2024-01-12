// Importing models to establish associations between Product, Category, Tag, and ProductTag

// Establishing a relationship where each Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Connecting through the category_id foreign key
  onDelete: "CASCADE" // Setting up cascading deletion for seamless data management
});

// Defining a relationship where each Category can have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Associating with the category_id foreign key
  onDelete: "CASCADE" // Enabling cascading deletion for efficient data handling
});

// Creating a many-to-many relationship between Products and Tags through the ProductTag model

// Products belong to many Tags through the intermediary model ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag
});

// Tags also belong to many Products through the same intermediary model ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag
});

// Exporting the models to make them accessible in other parts of the application

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
