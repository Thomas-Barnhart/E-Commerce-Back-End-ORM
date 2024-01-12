// Import necessary components from Express and Sequelize models
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  try {
    // Fetch all products, including their associated Category and Tag data
    const productData = await Product.findAll({
      include: [
        { model: Category }, // Include the Category model for associated category data
        { model: Tag }, // Include the Tag model for associated tag data
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }  
});

// GET a single product by its ID
router.get('/:id', async (req, res) => {
  try {
    // Find a product by its `id` value and include associated Category and Tag data 
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category }, // Include the Category model for associated category data
        { model: Tag } // Include the Tag model for associated tag data
      ],
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new product
router.post('/', async (req, res) => {
  try {
    // Create a new product with the provided request body
    const productData = await Product.create(req.body);

    // Check if there are associated tags and create pairings in the ProductTag model
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: productData.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// PUT (update) a product by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // Update a product by its `id` value with the provided request body
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // Check if there are associated tags and update pairings in the ProductTag model
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id }
      });

      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// DELETE a product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Delete a product by its `id` value
    const productData = await Product.destroy({
      where: { id: req.params.id, }
    });
    if (!productData) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export the router for use in other files
module.exports = router;
