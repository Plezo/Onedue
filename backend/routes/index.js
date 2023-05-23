const express = require('express')
const router = express.Router();

const usersRouter = require('./users');
const listsRouter = require('./lists');
const todosRouter = require('./todos')

router.use('/users', usersRouter);
router.use('/lists', listsRouter);
router.use('/todos', todosRouter);

module.exports = router;