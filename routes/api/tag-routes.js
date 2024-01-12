// Import necessary components from Express and Sequelize models
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    // Fetch all tags, including their associated Product data
    const tagData = await Tag.findAll({
      include: [
        { model: Product } // Include the Product model for associated product data
      ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }  
});

// GET a single tag by its ID
router.get('/:id', async (req, res) => {
  try {
    // Find a tag by its `id` value and include associated Product data 
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product } // Include the Product model for associated product data
      ],
    });
    if (!tagData) {
      res.status(404).json({ message: 'No Product found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    // Create a new tag with the provided request body
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT (update) a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // Update a tag's name by its `id` value with the provided request body
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!tagData[0]) {
      res.status(404).json({ message: 'No ID found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Delete a tag by its `id` value
    const tagData = await Tag.destroy({
      where: { id: req.params.id, }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }
    res.status(200).json('Category has been deleted!');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export the router for use in other files
module.exports = router;
