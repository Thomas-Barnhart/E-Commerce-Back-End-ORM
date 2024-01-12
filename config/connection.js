// Load environment variables from a .env file
require('dotenv').config();

// Import Sequelize library
const Sequelize = require('sequelize');

// Create a Sequelize instance
const sequelize = process.env.JAWSDB_URL
  ? // If JAWSDB_URL is provided (for production environment), use it
    new Sequelize(process.env.JAWSDB_URL)
  : // Otherwise, use local database configuration
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql', // Specify the database dialect (MySQL in this case)
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the configured Sequelize instance for use in other files
module.exports = sequelize;
