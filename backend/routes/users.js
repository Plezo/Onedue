const express = require('express');
const router = express.Router();
const { User, List, Todo } = require('../database/models');

const ash = require('express-async-handler');

router.get('/', ash(async(req, res) => {
  let users = await User.findAll({include: [List, Todo]});
  res.status(200).json(users);
}));

router.get('/:id', ash(async(req, res) => {
  let user = await User.findByPk(req.params.id, {include: [List, Todo]});
  res.status(200).json(user);
}));

router.post('/', function(req, res, next) {
  User.create(req.body)
    .then(createdUser => res.status(200).json(createdUser))
    .catch(err => next(err));
});

router.delete('/:id', function(req, res, next) {
  User.destroy({
    where: {
      user_id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a user!"))
    .catch(err => next(err));
});

router.put('/:id', ash(async(req, res) => {
  await User.update(req.body, { where: {id: req.params.id} });
  let user = await User.findByPk(req.params.id, {include: [List, Todo]});
  res.status(201).json(user);
}));

module.exports = router;