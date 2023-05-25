const express = require('express');
const router = express.Router();
const { User, List, Todo } = require('../database/models');

const ash = require('express-async-handler');

// get all todos
router.get('/', ash(async(req, res) => {
  let todos = await Todo.findAll({include: [List, User]});
  res.status(200).json(todos);
}));

// get todo by id
// router.get('/:id', ash(async(req, res) => {
//   let todo = await Todo.findByPk(req.params.id, {include: [List, User]});
//   res.status(200).json(todo);
// }));

// get todo by list id
router.get('/:id', ash(async(req, res) => {
  let todos = await Todo.findAll({ where: {list_id: req.params.id} });
  res.status(200).json(todos);
}));

// new todo
router.post('/', function(req, res, next) {
  Todo.create(req.body)
    .then(createdTodo => res.status(200).json(createdTodo))
    .catch(err => next(err));
});

// delete todo
router.delete('/:id', function(req, res, next) {
  Todo.destroy({
    where: {
      todo_id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a todo!"))
    .catch(err => next(err));
});

// edit todo by id
router.put('/:id', ash(async(req, res) => {
  await Todo.update(req.body, { where: {id: req.params.id} });
  let todo = await Todo.findByPk(req.params.id, {include: [List, User]});
  res.status(201).json(todo);
}));

router.patch('/:id', ash(async(req, res) => {
  await Todo.update(req.body, { where: {todo_id: req.params.id} });
  let todo = await Todo.findByPk(req.params.id, {include: [List, User]});
  res.status(201).json(todo);
}));

module.exports = router;