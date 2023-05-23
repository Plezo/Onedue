const express = require('express');
const router = express.Router();
const { User, List, Todo } = require('../database/models');

const ash = require('express-async-handler');

// get all lists
router.get('/', ash(async(req, res) => {
  let lists = await List.findAll({include: [Todo]});
  res.status(200).json(lists);
}));

// get list by id
router.get('/:id', ash(async(req, res) => {
  let list = await List.findByPk(req.params.id, {include: [Todo]})
  res.status(200).json(list);
}));

// new list
router.post('/', function(req, res, next) {
  List.create(req.body)
    .then(createdList => res.status(200).json(createdList))
    .catch(err => next(err));
});

// delete list
router.delete('/:id', function(req, res, next) {
  List.destroy({
    where: {
      list_id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a list!"))
    .catch(err => next(err));
});

// edit list by id
router.put('/:id', ash(async(req, res) => {
  await List.update(req.body, { where: {id: req.params.id} });
  let list = await List.findByPk(req.params.id, {include: [Todo]});
  res.status(201).json(list);
}));

module.exports = router;