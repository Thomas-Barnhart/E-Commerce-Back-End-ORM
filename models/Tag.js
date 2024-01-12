// Import necessary components from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const sequelize = require('../config/connection.js');

// Define the Tag model, extending Sequelize's Model class
class Tag extends Model {}

// Initialize the Tag model with column definitions
Tag.init(
  {
    // Define columns for the Tag model
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Should not allow null values
      primaryKey: true, // Designate it as the primary key
      autoIncrement: true, // Automatically increment the value
    },
    tag_name: {
      type: DataTypes.STRING, // Data type is STRING
    }
  },
  {
    // Set the Sequelize instance for this model
    sequelize,
    // Configure additional model options
    timestamps: false, // Do not include timestamps (createdAt, updatedAt)
    freezeTableName: true, // Use the model name as the table name
    underscored: true, // Use underscores in column names (e.g., tag_name)
    modelName: 'tag', // Define the model name in singular form
  }
);

// Export the Tag model for use in other files
module.exports = Tag;
