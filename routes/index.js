// Import necessary components from Express and other route files
const router = require('express').Router();
const apiRoutes = require('./api');

// Use the '/api' prefix for all API routes
router.use('/api', apiRoutes);

// Fallback route for handling requests to undefined routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>"); // Respond with a message for undefined routes
});

// Export the router for use in other files
module.exports = router;
