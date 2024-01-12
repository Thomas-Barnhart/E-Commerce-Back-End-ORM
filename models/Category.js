// Import necessary components from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const sequelize = require('../config/connection.js');

// Define the Category model, extending Sequelize's Model class
class Category extends Model {}

// Initialize the Category model with column definitions
Category.init(
  {
    // Define the 'id' column
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Should not allow null values
      primaryKey: true, // Designate it as the primary key
      autoIncrement: true, // Automatically increment the value
    },
    // Define the 'category_name' column
    category_name: {
      type: DataTypes.STRING, // Data type is STRING
      allowNull: false, // Should not allow null values
    }
  },
  {
    // Set the sequelize instance for this model
    sequelize,
    // Configure additional model options
    timestamps: false, // Do not include timestamps (createdAt, updatedAt)
    freezeTableName: true, // Use the model name as the table name
    underscored: true, // Use underscores in column names (e.g., category_name)
    modelName: 'category', // Define the model name in singular form
  }
);

// Export the Category model for use in other files
module.exports = Category;
