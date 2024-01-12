// Import necessary components from Express and Sequelize models
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories with associated Products
router.get('/', async (req, res) => {
  try {
    // Fetch all categories along with their associated Products
    const categoryData = await Category.findAll({
      include: [
        { model: Product } // Include the Product model to associate products with categories
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }  
});

// GET a category by its ID with associated Products
router.get('/:id', async (req, res) => {
  try {
    // Find one category by its `id` value and retrieve its associated Products 
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product // Include the Product model to associate products with categories
      }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  // Create a new category using the provided request body
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT (update) a category by its `id` value
router.put('/:id', async (req, res) => {
  // Update a category by its `id` value with the provided request body
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a category by its `id` value
router.delete('/:id', async (req, res) => {
  // Delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id, }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export the router for use in other files
module.exports = router;
