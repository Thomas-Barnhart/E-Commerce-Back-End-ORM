// Import necessary components from Express and other route files
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use category routes for the '/categories' endpoint
router.use('/categories', categoryRoutes);

// Use product routes for the '/products' endpoint
router.use('/products', productRoutes);

// Use tag routes for the '/tags' endpoint
router.use('/tags', tagRoutes);

// Export the router for use in other files
module.exports = router;
