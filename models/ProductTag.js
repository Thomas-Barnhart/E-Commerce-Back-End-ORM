// Import necessary components from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const sequelize = require('../config/connection');

// Define the ProductTag model, extending Sequelize's Model class
class ProductTag extends Model {}

// Initialize the ProductTag model with column definitions
ProductTag.init(
  {
    // Define columns for the ProductTag model
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Should not allow null values
      primaryKey: true, // Designate it as the primary key
      autoIncrement: true, // Automatically increment the value
    },
    product_id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      references: {
        model: 'product', // Reference the 'product' model
        key: 'id', // Reference the 'id' column in the 'product' model
        unique: false, // Allow non-unique values
      }
    },
    tag_id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      references: {
        model: 'tag', // Reference the 'tag' model
        key: 'id', // Reference the 'id' column in the 'tag' model
        unique: false, // Allow non-unique values
      }
    }
  },
  {
    // Set the Sequelize instance for this model
    sequelize,
    // Configure additional model options
    timestamps: false, // Do not include timestamps (createdAt, updatedAt)
    freezeTableName: true, // Use the model name as the table name
    underscored: true, // Use underscores in column names (e.g., product_id)
    modelName: 'product_tag', // Define the model name in singular form
  }
);

// Export the ProductTag model for use in other files
module.exports = ProductTag;
