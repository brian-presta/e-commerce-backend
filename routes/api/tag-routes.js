const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
        const result = await Tag.findAll({include: [{all: true}]})
        res.json(result)
  }
  catch(err) {
    res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const result = await Tag.findOne({
      where: {id: req.params.id},
      include: [{ all: true }]})
    res.json(result)
  }
  catch(err) {
    res.status(400).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
        const result = await Tag.create(req.body)
        res.json(result)
  }
  catch(err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
        await Tag.update(req.body,{where:{id:req.params.id}})
        res.json({message: `Tag ${req.params.id} updated!`})
  }
  catch(err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
        await Tag.destroy({where:{id:req.params.id}})
        res.json({message: 'Tag deleted!'})
  }
  catch(err) {
    res.status(400).json(err)
  }
});

module.exports = router;
