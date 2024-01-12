// Import important parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize the Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for the Product model
Product.init(
  {
    // Define columns for the Product model
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Should not allow null values
      primaryKey: true, // Designate it as the primary key
      autoIncrement: true, // Automatically increment the value
    },
    product_name: {
      type: DataTypes.STRING, // Data type is STRING
      allowNull: false, // Should not allow null values
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Data type is DECIMAL with precision 10 and scale 2
      allowNull: false, // Should not allow null values
      validate: {
        isDecimal: true, // Validate that the value is a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Should not allow null values
      defaultValue: 10, // Default value is set to 10
      validate: {
        isNumeric: true, // Validate that the value is numeric
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      references: {
        model: 'category', // Reference the 'category' model
        key: 'id', // Reference the 'id' column in the 'category' model
      },
    }
  },
  {
    // Set the Sequelize instance for this model
    sequelize,
    // Configure additional model options
    timestamps: false, // Do not include timestamps (createdAt, updatedAt)
    freezeTableName: true, // Use the model name as the table name
    underscored: true, // Use underscores in column names (e.g., category_id)
    modelName: 'product', // Define the model name in singular form
  }
);

// Export the Product model for use in other files
module.exports = Product;
